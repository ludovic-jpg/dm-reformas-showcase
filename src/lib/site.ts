
import serviceCocina from "@/assets/service-cocina.jpg";
import serviceBano from "@/assets/service-bano.jpg";
import serviceFachada from "@/assets/service-fachada.jpg";
import serviceTejado from "@/assets/service-tejado.jpg";
import servicePiscina from "@/assets/service-piscina.jpg";
import serviceTerraza from "@/assets/service-terraza.jpg";
import serviceLocal from "@/assets/service-local.jpg";
import beforePiso from "@/assets/before-piso.jpg";
import beforeBano from "@/assets/before-bano.jpg";
import beforeCocina from "@/assets/before-cocina.jpg";
import beforeFachada from "@/assets/before-fachada.jpg";
import beforePiscina from "@/assets/before-piscina.jpg";
import beforeLocal from "@/assets/before-local.jpg";
import beforeTerraza from "@/assets/before-terraza.jpg";
import afterSalon from "@/assets/after-salon.jpg";
import artisanAsset from "@/assets/artisan.asset.json";
import aboutTeamAsset from "@/assets/nosotros-team.asset.json";
import officeAsset from "@/assets/office.asset.json";
import logoAsset from "@/assets/dm-logo.asset.json";

export const images = {
  hero: afterSalon,
  salon: afterSalon,
  cocina: serviceCocina,
  bano: serviceBano,
  fachada: serviceFachada,
  tejado: serviceTejado,
  piscina: servicePiscina,
  terraza: serviceTerraza,
  local: serviceLocal,
  beforePiso,
  beforeBano,
  beforeCocina,
  beforeFachada,
  beforePiscina,
  beforeLocal,
  beforeTerraza,
  artisan: artisanAsset.url,
  aboutTeam: aboutTeamAsset.url,
  office: officeAsset.url,
  logo: logoAsset.url,
  homeHero: aboutTeamAsset.url,
};

export const company = {
  name: "DM Reformas",
  tagline: "Innovamos en tu proyecto",
  email: "dm.reformasinnovamos@gmail.com",
  phone: "+34 655 13 36 60",
  phoneHref: "+34655133660",
  whatsapp: "34655133660",
  city: "Torrevieja",
  region: "Alicante, Costa Blanca",
  postalCode: "03181",
  street: "Av. de las Cortes Valencianas 1",
  country: "ES",
  lat: 37.9787,
  lng: -0.6822,
  hours: "Mo-Fr 08:00-18:00, Sa 09:00-13:00",
  social: {
    instagram: "https://www.instagram.com/dm.reformas.es",
    facebook: "https://www.facebook.com/",
  },
};

export const serviceAreas = [
  "Torrevieja",
  "La Mata",
  "Los Balcones",
  "Orihuela Costa",
  "Guardamar del Segura",
  "Ciudad Quesada",
  "San Miguel de Salinas",
  "Rojales",
  "Pilar de la Horadada",
  "Los Montesinos",
];

/** Reform types shared by the services page and the dynamic contact form. */
export const reformTypes = [
  "integral",
  "cocina",
  "bano",
  "fachada",
  "tejado",
  "piscina",
  "extension",
  "pintura",
  "instalaciones",
  "local",
  "otro",
] as const;

export type ReformType = (typeof reformTypes)[number];

export type ServiceItem = {
  id: ReformType;
  icon: string;
  image: string;
  alt: { es: string; en: string };
};

export const services: ServiceItem[] = [
  {
    id: "integral",
    icon: "Home",
    image: images.hero,
    alt: {
      es: "Salón de vivienda reformada integralmente en Torrevieja",
      en: "Living room of a fully renovated home in Torrevieja",
    },
  },
  {
    id: "cocina",
    icon: "ChefHat",
    image: images.cocina,
    alt: {
      es: "Cocina moderna reformada con muebles antracita",
      en: "Modern renovated kitchen with anthracite units",
    },
  },
  {
    id: "bano",
    icon: "ShowerHead",
    image: images.bano,
    alt: {
      es: "Baño reformado con plato de ducha y gres de gran formato",
      en: "Renovated bathroom with walk-in shower and large format tiles",
    },
  },
  {
    id: "fachada",
    icon: "Building2",
    image: images.fachada,
    alt: {
      es: "Operarios rehabilitando la fachada de un edificio en la Costa Blanca",
      en: "Workers restoring a building facade on the Costa Blanca",
    },
  },
  {
    id: "tejado",
    icon: "HardHat",
    image: images.tejado,
    alt: {
      es: "Colocación de teja nueva en la cubierta de una villa",
      en: "New roof tiles being laid on a villa roof",
    },
  },
  {
    id: "piscina",
    icon: "Waves",
    image: images.piscina,
    alt: {
      es: "Piscina privada reformada con coronación de porcelánico",
      en: "Renovated private pool with porcelain coping",
    },
  },
  {
    id: "extension",
    icon: "Ruler",
    image: images.office,
    alt: {
      es: "Técnico de DM Reformas revisando los planos de una ampliación",
      en: "DM Reformas technician reviewing extension drawings",
    },
  },
  {
    id: "pintura",
    icon: "PaintRoller",
    image: images.artisan,
    alt: {
      es: "Profesional de DM Reformas trabajando en una obra",
      en: "DM Reformas professional working on site",
    },
  },
  {
    id: "instalaciones",
    icon: "Wrench",
    image: images.terraza,
    alt: {
      es: "Terraza con pérgola de aluminio y tarima exterior",
      en: "Terrace with aluminium pergola and outdoor decking",
    },
  },
  {
    id: "local",
    icon: "Store",
    image: images.local,
    alt: {
      es: "Local comercial reformado listo para su apertura",
      en: "Renovated commercial unit ready to open",
    },
  },
];

export type ProjectItem = {
  id: string;
  category: ReformType;
  city: string;
  before: string;
  after: string;
  duration: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  alt: { es: string; en: string };
};

export const projects: ProjectItem[] = [
  {
    id: "piso-torrevieja",
    category: "integral",
    city: "Torrevieja",
    before: images.beforePiso,
    after: images.hero,
    duration: "9 semanas / 9 weeks",
    title: {
      es: "Reforma integral de piso de 85 m²",
      en: "Full renovation of an 85 m² apartment",
    },
    description: {
      es: "Redistribución completa, nueva instalación eléctrica y de fontanería, suelo porcelánico continuo y salón abierto a la cocina.",
      en: "Complete redistribution, new electrical and plumbing installation, continuous porcelain flooring and an open-plan kitchen-living room.",
    },
    alt: {
      es: "Antes y después de una reforma integral de piso en Torrevieja",
      en: "Before and after of a full apartment renovation in Torrevieja",
    },
  },
  {
    id: "bano-la-mata",
    category: "bano",
    city: "La Mata",
    before: images.beforeBano,
    after: images.bano,
    duration: "12 días / 12 days",
    title: {
      es: "Baño completo con ducha de obra",
      en: "Complete bathroom with walk-in shower",
    },
    description: {
      es: "Sustitución de bañera por plato de ducha, gres de gran formato, mueble suspendido e iluminación LED indirecta.",
      en: "Bathtub replaced with a shower tray, large format tiles, wall-hung vanity and indirect LED lighting.",
    },
    alt: {
      es: "Antes y después de la reforma de un baño en La Mata",
      en: "Before and after of a bathroom renovation in La Mata",
    },
  },
  {
    id: "cocina-orihuela",
    category: "cocina",
    city: "Orihuela Costa",
    before: images.beforeCocina,
    after: images.cocina,
    duration: "3 semanas / 3 weeks",
    title: {
      es: "Cocina abierta con isla y encimera de cuarzo",
      en: "Open kitchen with island and quartz worktop",
    },
    description: {
      es: "Demolición del tabique, nuevo mobiliario a medida, electrodomésticos integrados y ventilación reforzada.",
      en: "Partition wall removed, new bespoke units, integrated appliances and upgraded ventilation.",
    },
    alt: {
      es: "Antes y después de la reforma de una cocina en Orihuela Costa",
      en: "Before and after of a kitchen renovation in Orihuela Costa",
    },
  },
  {
    id: "fachada-guardamar",
    category: "fachada",
    city: "Guardamar del Segura",
    before: images.beforeFachada,
    after: images.fachada,
    duration: "5 semanas / 5 weeks",
    title: {
      es: "Rehabilitación de fachada y aislamiento",
      en: "Facade restoration and insulation",
    },
    description: {
      es: "Saneado de fisuras, mortero monocapa, impermeabilización y pintura elástica resistente al salitre marino.",
      en: "Crack repair, single-coat render, waterproofing and elastic paint resistant to sea salt.",
    },
    alt: {
      es: "Antes y después de la rehabilitación de una fachada en Guardamar",
      en: "Before and after of a facade restoration in Guardamar",
    },
  },
  {
    id: "piscina-quesada",
    category: "piscina",
    city: "Ciudad Quesada",
    before: images.beforePiscina,
    after: images.piscina,
    duration: "4 semanas / 4 weeks",
    title: {
      es: "Renovación de piscina y solárium",
      en: "Pool and sun deck renovation",
    },
    description: {
      es: "Nuevo revestimiento, coronación de porcelánico antideslizante, iluminación LED y depuradora renovada.",
      en: "New lining, anti-slip porcelain coping, LED lighting and a renewed filtration system.",
    },
    alt: {
      es: "Piscina renovada en Ciudad Quesada",
      en: "Renovated pool in Ciudad Quesada",
    },
  },
  {
    id: "local-torrevieja",
    category: "local",
    city: "Torrevieja centro",
    before: images.beforeLocal,
    after: images.local,
    duration: "6 semanas / 6 weeks",
    title: {
      es: "Adecuación de local comercial",
      en: "Commercial unit fit-out",
    },
    description: {
      es: "Obra completa con aire acondicionado, iluminación en raíl, escaparate nuevo y certificado de instalación.",
      en: "Complete fit-out with air conditioning, track lighting, a new shopfront and installation certificate.",
    },
    alt: {
      es: "Local comercial reformado en el centro de Torrevieja",
      en: "Renovated commercial unit in central Torrevieja",
    },
  },
  {
    id: "terraza-balcones",
    category: "extension",
    city: "Los Balcones",
    before: images.beforeTerraza,
    after: images.terraza,
    duration: "5 semanas / 5 weeks",
    title: {
      es: "Ampliación de terraza con pérgola bioclimática",
      en: "Terrace extension with bioclimatic pergola",
    },
    description: {
      es: "Estructura de aluminio, tarima técnica exterior, tomas de luz estancas y proyecto visado.",
      en: "Aluminium structure, technical outdoor decking, weatherproof sockets and approved technical project.",
    },
    alt: {
      es: "Terraza ampliada con pérgola en Los Balcones",
      en: "Extended terrace with pergola in Los Balcones",
    },
  },
];

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  rating: number;
  type: { es: string; en: string };
  text: { es: string; en: string };
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ana Martínez",
    city: "Torrevieja",
    rating: 5,
    type: { es: "Reforma integral", en: "Full renovation" },
    text: {
      es: "Reformaron nuestro piso de arriba abajo en el plazo prometido. Presupuesto claro, sin sorpresas y una obra limpia cada día. El equipo explicaba todo antes de ejecutarlo.",
      en: "They renovated our apartment from top to bottom within the promised deadline. A clear quote, no surprises and a clean site every day. The team explained everything before doing it.",
    },
  },
  {
    id: "t2",
    name: "James Wilson",
    city: "Orihuela Costa",
    rating: 5,
    type: { es: "Cocina y baño", en: "Kitchen and bathroom" },
    text: {
      es: "Vivo entre Inglaterra y España y gestionaron la obra a distancia con fotos semanales. Todo estaba terminado y limpio a mi llegada.",
      en: "I live between England and Spain and they managed the works remotely with weekly photos. Everything was finished and spotless when I arrived.",
    },
  },
  {
    id: "t3",
    name: "Sofía Navarro",
    city: "Guardamar del Segura",
    rating: 5,
    type: { es: "Fachada y cubierta", en: "Facade and roof" },
    text: {
      es: "Teníamos humedades desde años. Diagnosticaron el problema, impermeabilizaron la cubierta y rehabilitaron la fachada. Dos inviernos después, ni una mancha.",
      en: "We had damp problems for years. They diagnosed it, waterproofed the roof and restored the facade. Two winters later, not a single stain.",
    },
  },
  {
    id: "t4",
    name: "Karel Janssen",
    city: "Ciudad Quesada",
    rating: 5,
    type: { es: "Piscina y solárium", en: "Pool and sun deck" },
    text: {
      es: "Muy profesionales y puntuales. La piscina quedó como nueva y nos asesoraron para reducir el consumo de la depuradora.",
      en: "Very professional and punctual. The pool looks brand new and they advised us on how to cut the filtration system's consumption.",
    },
  },
  {
    id: "t5",
    name: "Marta Ruiz",
    city: "Los Balcones",
    rating: 4,
    type: { es: "Baño", en: "Bathroom" },
    text: {
      es: "Trabajo impecable en 12 días. Solo un pequeño retraso con el suministro de los sanitarios, avisado con antelación.",
      en: "Impeccable work in 12 days. Only a small delay with the sanitary ware delivery, which they flagged in advance.",
    },
  },
  {
    id: "t6",
    name: "Pierre Lambert",
    city: "San Miguel de Salinas",
    rating: 5,
    type: { es: "Local comercial", en: "Commercial unit" },
    text: {
      es: "Abrimos la tienda en la fecha prevista. Se encargaron de la licencia, del aire acondicionado y del certificado eléctrico.",
      en: "We opened the shop on the planned date. They handled the licence, the air conditioning and the electrical certificate.",
    },
  },
];
