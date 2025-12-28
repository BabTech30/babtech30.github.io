# 🛠️ Multitech34 - Site Web V5 (Production)

Site officiel de **Multitech34** (Bastien Ferrer) - Artisan Plombier Chauffagiste Climaticien à Montpellier.

🌐 **URL :** [https://www.multi-technique-montpellier.fr](https://www.multi-technique-montpellier.fr)

---

## 🆕 Nouveautés V5

- **CSS Production** : Plus de dépendance Tailwind CDN, fichier `styles.css` optimisé (27KB)
- **Boutique E-commerce** : Vente de kits d'entretien DIY avec système de réservation
- **6 nouvelles pages géographiques** : Pérols, Castelnau, Mauguio + pages existantes migrées
- **Schema FAQ** : Balisage structuré pour SEO enrichi
- **llms.txt** : Optimisation pour les moteurs IA (ChatGPT, Perplexity, Claude)

---

## 📂 Structure du Projet

```
multitech34-v5/
├── index.html              # Page d'accueil
├── plomberie.html          # Services plomberie
├── chauffage.html          # Services chauffage
├── climatisation.html      # Services climatisation
├── depannage.html          # Multiservices
├── contact.html            # Formulaire de contact
├── faq.html                # FAQ avec Schema.org
├── boutique.html           # E-commerce kits DIY
├── reservation.html        # Tunnel de réservation
├── confirmation.html       # Page de confirmation
├── lattes.html             # Zone Lattes/Maurin
├── montpellier.html        # Zone Montpellier
├── littoral.html           # Zone Palavas/Grande-Motte
├── perols.html             # Zone Pérols
├── castelnau.html          # Zone Castelnau-le-Lez
├── mauguio.html            # Zone Mauguio
├── styles.css              # CSS production (27KB)
├── multitech34.js          # JavaScript (Madison AI + menus)
├── robots.txt              # Instructions crawlers
├── sitemap.xml             # Plan du site
├── llms.txt                # Optimisation IA
└── *.jpg                   # Images (logos + photos chantiers)
```

---

## 🚀 Déploiement

### Hébergement : O2Switch

1. **Connexion FTP** via FileZilla
2. **Upload** de tous les fichiers dans `public_html/`
3. **Vérifier** le certificat SSL actif

### Checklist pré-production :

- [ ] Toutes les images uploadées
- [ ] `styles.css` à la racine
- [ ] `multitech34.js` à la racine
- [ ] Test formulaire contact (FormSubmit)
- [ ] Test Madison chatbot
- [ ] Vérification mobile responsive

---

## 🎨 Palette de Couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| Primary | `#1a5f4a` | Vert principal (confiance) |
| Secondary | `#16a085` | Vert clair (accent) |
| Accent | `#f39c12` | Orange (CTA, urgence) |
| Dark | `#2c3e50` | Texte sombre |

---

## 🤖 Madison AI

Assistant virtuel intégré dans `multitech34.js`. Reconnaît les mots-clés :

- **Urgence/Fuite** → Redirige vers téléphone
- **Prix/Devis** → Explique la transparence tarifaire
- **Calcaire** → Recommande adoucisseur
- **Sel/Mer** → Parle de la protection anti-corrosion
- **Boue/Radiateur** → Explique le désembouage

---

## 📊 SEO & Optimisation

### Fichiers SEO :
- `robots.txt` : Autorise tous les crawlers
- `sitemap.xml` : 16 URLs indexées
- `llms.txt` : Données structurées pour IA

### Schema.org implémenté :
- LocalBusiness (index)
- Plumber (plomberie, zones)
- HVACBusiness (chauffage, clim)
- FAQPage (faq)
- Product (boutique)

---

## 📱 Responsive Design

Breakpoints CSS :
- Mobile : < 640px
- Tablet : 640px - 1024px
- Desktop : > 1024px

---

## 📞 Contact

- **Téléphone** : 06 49 95 52 98
- **Email** : babferrer@icloud.com
- **Adresse** : 18 plan de New York, 34970 Lattes

---

## ❤️ Crédits

*"Créé avec IAmour pour ❤️ Lucille ❤️ Grâce à Dieu, pour sa gloire."*

---

**Dernière mise à jour** : Décembre 2025 - Version 5.0
