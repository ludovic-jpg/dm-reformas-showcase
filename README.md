# DM Reformas Showcase

Crée un site vitrine professionnel pour DM Reformas, une entreprise de BTP / reformas (rénovation et travaux de construction) basée à Torrevieja, Costa Blanca, Espagne, intervenant sur Torrevieja et ses environs (Orihuela Costa, Guardamar del Segura, La Mata, Los Balcones, Ciudad Quesada, San Miguel de Salinas, etc.).

Slogan de la marque : "Innovamos en tu proyecto"

DM Reformas réalise tous types de rénovations : reformas intégrales de logements, cuisines, salles de bain, extensions, façades, toitures, piscines, peinture, électricité, plomberie, carrelage, menuiserie, terrasses et pergolas, et rénovation de locaux commerciaux.

## Objectif du site
Site vitrine (pas d'e-commerce) destiné à générer des demandes de devis auprès de particuliers et de professionnels dans la zone Costa Blanca. Le site doit inspirer confiance (qualité du travail, sérieux, réactivité) et pousser à la conversion via des appels à l'action clairs sur chaque page.

## Langues
Site bilingue espagnol / anglais, avec l'espagnol comme langue par défaut et un sélecteur de langue (drapeau ou toggle "ES / EN") visible dans le header sur toutes les pages. Tout le contenu, les formulaires, les messages de confirmation/erreur et les mentions légales doivent exister dans les deux langues, avec les URLs correctement gérées par langue (routing propre, pas de traduction uniquement visuelle).

## Structure du site
1. **Accueil (Inicio)** : hero avec accroche + slogan "Innovamos en tu proyecto", CTA principal ("Solicita tu presupuesto gratis"), présentation courte de l'entreprise, aperçu des services avec icônes, zone d'intervention (carte ou liste des villes), quelques réalisations en avant, témoignages clients, bandeau CTA final avant le footer.
2. **Servicios** : liste complète des types de reformas proposés, chacun avec description courte, visuel, et un CTA vers le formulaire de contact pré-rempli avec le service concerné.
3. **Proyectos / Portfolio** : galerie de réalisations organisée par type de travaux, avec un système "avant / après" (slider ou côte à côte) et filtres par catégorie.
4. **Nosotros (À propos)** : présentation de l'entreprise, valeurs, méthode de travail, garanties, zone d'intervention, éventuellement les certifications/assurances.
5. **Testimonios** : avis clients détaillés (nom, ville, type de travaux, note, texte).
6. **Contacto** : formulaire de contact complet + coordonnées + carte Google Maps de la zone d'intervention + bouton WhatsApp cliquable.
7. **Footer** présent sur toutes les pages : coordonnées, liens rapides, réseaux sociaux, mentions légales (Aviso legal, Política de privacidad, Política de cookies) et copyright.

## Formulaire dynamique
Le formulaire de contact (accessible depuis le Contacto et depuis chaque fiche service) doit être dynamique :
- Champs de base : nom, téléphone, email, ville/zone, message.
- Un menu déroulant "Tipo de reforma" (Reforma integral, Cocina, Baño, Fachada, Tejado, Piscina, Extensión, Pintura, Electricidad/Fontanería, Local comercial, Otro).
- Selon le type sélectionné, des champs complémentaires apparaissent dynamiquement (ex : superficie en m² pour une reforma integral, budget approximatif pour cuisine/salle de bain, type de bâtiment pour façade/toiture).
- Champ optionnel d'upload de photos (pour que le client joigne des photos de son projet).
- Validation en temps réel des champs obligatoires et du format email/téléphone, messages d'erreur clairs en ES/EN.
- Message de succès après envoi, protection anti-spam basique (honeypot).
- Tous les CTA du site ("Pide presupuesto", "Contáctanos", boutons dans les fiches services, bandeau final, etc.) doivent ouvrir ou faire défiler vers ce même formulaire, avec le type de reforma pré-sélectionné quand pertinent.

## Notifications par email
Toute soumission de formulaire (et tout CTA de contact) doit déclencher automatiquement l'envoi d'un email à dm.reformasinnovamos@gmail.com contenant l'ensemble des informations saisies par le visiteur (coordonnées, type de reforma, message, éventuelles pièces jointes). Utilise une edge function connectée à une intégration d'envoi d'email (Resend) pour cet envoi, et enregistre également chaque soumission dans une table de base de données comme sauvegarde/CRM basique consultable plus tard.

## SEO
Le site doit être optimisé SEO dès sa création :
- Balises title et meta description uniques et pertinentes par page et par langue, ciblant les recherches locales ("reformas Torrevieja", "reformas integrales Costa Blanca", "reformas baños Torrevieja", etc.).
- Structure Hn cohérente (un seul H1 par page), URLs propres et traduites par langue, balises alt descriptives sur toutes les images.
- Données structurées Schema.org de type LocalBusiness / HomeAndConstructionBusiness avec adresse, zone desservie, téléphone et horaires.
- Sitemap.xml et robots.txt générés automatiquement.
- Balises hreflang correctes entre les versions ES et EN.
- Performance : images optimisées/lazy-loading, site rapide et mobile-first, bonnes pratiques Core Web Vitals.

## Design
Style moderne, professionnel et rassurant, cohérent avec le secteur du BTP/rénovation haut de gamme : palette de couleurs à dominante bleu foncé ou anthracite associée à une couleur d'accent orange ou terracotta pour les CTA (à ajuster si je fournis une charte graphique), typographie lisible et actuelle, beaucoup de photos de chantiers/réalisations, mise en page aérée. Site entièrement responsive (mobile, tablette, desktop), avec un bouton WhatsApp flottant visible sur toutes les pages.

## Pages légales
Génère des pages Aviso legal, Política de privacidad et Política de cookies conformes RGPD, avec un bandeau de consentement cookies à l'arrivée sur le site, en ES et EN.

Utilise des textes de contenu réalistes et professionnels en attendant que je fournisse les textes définitifs, et des visuels placeholder de qualité (chantiers, artisans au travail, matériaux) en attendant mes propres photos.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dm-reformas-showcase.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cd5e2fb2-eec9-4392-9bbc-ec570adee312).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
