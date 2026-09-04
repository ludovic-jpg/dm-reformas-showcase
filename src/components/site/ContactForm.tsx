import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, AlertTriangle, Loader2, Upload } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LocaleLink } from "@/components/site/LocaleLink";
import { supabase } from "@/integrations/supabase/client";
import { submitContactRequest } from "@/lib/contact.functions";
import { reformTypes, type ReformType } from "@/lib/site";
import { dictionaries, path, type Locale } from "@/lib/i18n";

type FieldKey =
  | "name"
  | "phone"
  | "email"
  | "city"
  | "reformType"
  | "message"
  | "surface"
  | "rooms"
  | "budget"
  | "buildingType"
  | "urgency";

type Extras = "surface" | "rooms" | "budget" | "buildingType" | "urgency";

const extrasByType: Record<ReformType, Extras[]> = {
  integral: ["surface", "rooms", "budget", "urgency"],
  cocina: ["budget", "urgency"],
  bano: ["budget", "urgency"],
  fachada: ["buildingType", "surface"],
  tejado: ["buildingType", "surface"],
  piscina: ["surface", "budget"],
  extension: ["surface", "buildingType", "budget"],
  pintura: ["surface", "buildingType"],
  instalaciones: ["buildingType", "urgency"],
  local: ["surface", "urgency"],
  otro: ["urgency"],
};

const emailRe = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const phoneRe = /^[+\d][\d\s().-]{7,}$/;

export function ContactForm({ locale, initialType }: { locale: Locale; initialType?: ReformType }) {
  const t = dictionaries[locale];
  const send = useServerFn(submitContactRequest);
  const location = useRouterState({ select: (s) => s.location });

  const [values, setValues] = useState<Record<FieldKey, string>>({
    name: "",
    phone: "",
    email: "",
    city: "",
    reformType: initialType ?? "",
    message: "",
    surface: "",
    rooms: "",
    budget: "",
    buildingType: "",
    urgency: "",
  });
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState<Partial<Record<FieldKey | "consent", boolean>>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "uploading" | "sending" | "success" | "error">("idle");

  // Pre-select the reform type coming from a service card link (?tipo=cocina).
  useEffect(() => {
    const search = location.searchStr ?? "";
    const tipo = new URLSearchParams(search).get("tipo");
    if (tipo && (reformTypes as readonly string[]).includes(tipo)) {
      setValues((v) => ({ ...v, reformType: tipo }));
    }
  }, [location.searchStr]);

  useEffect(() => {
    if (initialType) setValues((v) => ({ ...v, reformType: initialType }));
  }, [initialType]);

  const activeExtras = useMemo<Extras[]>(
    () => (values.reformType ? extrasByType[values.reformType as ReformType] : []),
    [values.reformType],
  );

  const errors = useMemo(() => {
    const e: Partial<Record<FieldKey | "consent", string>> = {};
    if (!values.name.trim()) e.name = t.form.required;
    if (!values.phone.trim()) e.phone = t.form.required;
    else if (!phoneRe.test(values.phone.trim())) e.phone = t.form.invalidPhone;
    if (!values.email.trim()) e.email = t.form.required;
    else if (!emailRe.test(values.email.trim())) e.email = t.form.invalidEmail;
    if (!values.reformType) e.reformType = t.form.required;
    if (!values.message.trim()) e.message = t.form.required;
    else if (values.message.trim().length < 10) e.message = t.form.tooShort;
    if (!consent) e.consent = t.form.consentRequired;
    return e;
  }, [values, consent, t]);

  const setField = (key: FieldKey, value: string) => setValues((v) => ({ ...v, [key]: value }));
  const showError = (key: FieldKey | "consent") => (touched[key] ? errors[key] : undefined);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({
      name: true,
      phone: true,
      email: true,
      reformType: true,
      message: true,
      consent: true,
    });
    if (Object.keys(errors).length > 0) return;

    try {
      const photoUrls: string[] = [];
      if (files.length > 0) {
        setStatus("uploading");
        for (const file of files.slice(0, 5)) {
          const key = `${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
          const { error } = await supabase.storage.from("project-photos").upload(key, file, {
            cacheControl: "3600",
            upsert: false,
          });
          if (!error) photoUrls.push(`project-photos/${key}`);
        }
      }

      setStatus("sending");
      const extra: Record<string, string> = {};
      for (const key of activeExtras) {
        const value = values[key];
        if (value) extra[t.form[key === "buildingType" ? "buildingType" : key]] = value;
      }

      await send({
        data: {
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          city: values.city.trim(),
          reformType: t.services.items[values.reformType as ReformType].title,
          message: values.message.trim(),
          extra,
          photoUrls,
          locale,
          sourcePage: location.pathname,
          companyWebsite: honeypot,
        },
      });
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center shadow-soft">
        <CheckCircle2 className="mx-auto size-12 text-whatsapp" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold">{t.form.successTitle}</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{t.form.successText}</p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setValues((v) => ({ ...v, message: "", surface: "", rooms: "" }));
            setFiles([]);
            setTouched({});
            setStatus("idle");
          }}
        >
          {t.form.newRequest}
        </Button>
      </div>
    );
  }

  const busy = status === "uploading" || status === "sending";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-6 shadow-soft md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.form.name} error={showError("name")} id="name">
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            onBlur={() => setTouched((s) => ({ ...s, name: true }))}
            aria-invalid={Boolean(showError("name"))}
          />
        </Field>

        <Field label={t.form.phone} error={showError("phone")} id="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            onBlur={() => setTouched((s) => ({ ...s, phone: true }))}
            aria-invalid={Boolean(showError("phone"))}
          />
        </Field>

        <Field label={t.form.email} error={showError("email")} id="email">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            onBlur={() => setTouched((s) => ({ ...s, email: true }))}
            aria-invalid={Boolean(showError("email"))}
          />
        </Field>

        <Field label={t.form.city} id="city">
          <Input
            id="city"
            name="city"
            placeholder={t.form.cityPlaceholder}
            value={values.city}
            onChange={(e) => setField("city", e.target.value)}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label={t.form.type} error={showError("reformType")} id="reformType">
            <select
              id="reformType"
              name="reformType"
              value={values.reformType}
              onChange={(e) => setField("reformType", e.target.value)}
              onBlur={() => setTouched((s) => ({ ...s, reformType: true }))}
              aria-invalid={Boolean(showError("reformType"))}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="">{t.form.typePlaceholder}</option>
              {reformTypes.map((type) => (
                <option key={type} value={type}>
                  {t.services.items[type].title}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {activeExtras.includes("surface") && (
          <Field label={`${t.form.surface} (${t.form.optional})`} id="surface">
            <Input
              id="surface"
              name="surface"
              type="number"
              min={1}
              value={values.surface}
              onChange={(e) => setField("surface", e.target.value)}
            />
          </Field>
        )}

        {activeExtras.includes("rooms") && (
          <Field label={`${t.form.rooms} (${t.form.optional})`} id="rooms">
            <Input
              id="rooms"
              name="rooms"
              type="number"
              min={1}
              value={values.rooms}
              onChange={(e) => setField("rooms", e.target.value)}
            />
          </Field>
        )}

        {activeExtras.includes("budget") && (
          <Field label={`${t.form.budget} (${t.form.optional})`} id="budget">
            <SelectNative
              id="budget"
              value={values.budget}
              onChange={(value) => setField("budget", value)}
              placeholder={t.form.typePlaceholder}
              options={t.form.budgetOptions}
            />
          </Field>
        )}

        {activeExtras.includes("buildingType") && (
          <Field label={`${t.form.buildingType} (${t.form.optional})`} id="buildingType">
            <SelectNative
              id="buildingType"
              value={values.buildingType}
              onChange={(value) => setField("buildingType", value)}
              placeholder={t.form.typePlaceholder}
              options={t.form.buildingOptions}
            />
          </Field>
        )}

        {activeExtras.includes("urgency") && (
          <Field label={`${t.form.urgency} (${t.form.optional})`} id="urgency">
            <SelectNative
              id="urgency"
              value={values.urgency}
              onChange={(value) => setField("urgency", value)}
              placeholder={t.form.typePlaceholder}
              options={t.form.urgencyOptions}
            />
          </Field>
        )}

        <div className="sm:col-span-2">
          <Field label={t.form.message} error={showError("message")} id="message">
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t.form.messagePlaceholder}
              value={values.message}
              onChange={(e) => setField("message", e.target.value)}
              onBlur={() => setTouched((s) => ({ ...s, message: true }))}
              aria-invalid={Boolean(showError("message"))}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="photos" className="mb-1.5 block text-sm font-medium">
            {t.form.photos}
          </Label>
          <label
            htmlFor="photos"
            className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-input px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted"
          >
            <Upload className="size-4" aria-hidden="true" />
            <span>
              {files.length > 0
                ? files.map((f) => f.name).join(", ")
                : t.form.photosHint}
            </span>
          </label>
          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            multiple
            className="sr-only"
            onChange={(e) => setFiles(Array.from(e.target.files ?? []).slice(0, 5))}
          />
        </div>

        {/* Honeypot — hidden from humans, filled by most bots. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company-website">Website</label>
          <input
            id="company-website"
            name="company-website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="flex items-start gap-2.5 text-sm">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                setTouched((s) => ({ ...s, consent: true }));
              }}
              className="mt-0.5 size-4 rounded border-input accent-accent"
              aria-invalid={Boolean(showError("consent"))}
            />
            <span className="text-muted-foreground">
              {t.form.consent}{" "}
              <LocaleLink to={path(locale, "privacy")} className="font-medium text-accent underline">
                {t.form.consentLink}
              </LocaleLink>
              . *
            </span>
          </label>
          {showError("consent") && (
            <p className="mt-1 text-xs font-medium text-destructive">{showError("consent")}</p>
          )}
        </div>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/5 p-4">
          <AlertTriangle className="mt-0.5 size-5 text-destructive" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-destructive">{t.form.errorTitle}</p>
            <p className="text-sm text-muted-foreground">{t.form.errorText}</p>
          </div>
        </div>
      )}

      <Button type="submit" variant="cta" size="lg" className="mt-6 w-full" disabled={busy}>
        {busy && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {status === "uploading"
          ? t.form.uploading
          : status === "sending"
            ? t.form.submitting
            : t.form.submit}
      </Button>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </Label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

function SelectNative({
  id,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
