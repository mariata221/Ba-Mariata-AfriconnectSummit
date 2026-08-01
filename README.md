#AfriconnectSummit
Projet fil rouge - Plateforme de mise en relation entre developpeurs ,entrepreneurs et investisseur du continent .
Auteur : Mariata Ba
Promotion : L1 Web - ISI

# 🌍 AfriconnectSummit 2026

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-4CAF50?style=for-the-badge&logo=responsive&logoColor=white)
![Status](https://img.shields.io/badge/Status-En%20développement-orange?style=for-the-badge)
![Licence](https://img.shields.io/badge/Licence-Tous%20droits%20réservés-lightgrey?style=for-the-badge)

Site web vitrine pour *AfriconnectSummit*, un sommet panafricain de 3 jours (18–20 septembre 2026) réunissant fondateurs, investisseurs et créateurs autour de l'IA, la fintech, l'énergie, le design et la data.



## 📋 Aperçu du site
![Accueil](images/index.png)
![Programme](images/progra.png)
![Intervenant](images/intervena.png)
![Contact ](images/contac.png)

Le site est composé de 4 pages HTML statiques, stylées avec un CSS unique et animées via un script JavaScript commun :

| Page | Description |
|---|---|
| index.html | Page d'accueil : hero, compte à rebours, chiffres clés, pourquoi participer, intervenants vedettes, sponsors |
| programme.html | Planning des 3 jours du sommet (onglets par jour) et les 4 thématiques de la conférence |
| intervenants.html | Liste filtrable des intervenants par catégorie (IA & Tech, Business, Design, Data) |
| contact.html | Formulaire d'inscription avec validation, FAQ et carte de localisation |

### Mode sombre
- Toggle dark mode persistant grâce à `localStorage`
- Icône lune/soleil selon le thème actif

### Animations
- **Fade-in** au scroll via `IntersectionObserver` (`.fade-in` → `.visible`)
- **Compteurs animés** déclenchés à l'entrée dans le viewport (`IntersectionObserver`)

## 📁 Structure du projet
├── index.html
├── programme.html
├── intervenants.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
└── … (photos des intervenants, sponsors, visuels hero)

## ✨ Fonctionnalités

- *Mode sombre / clair* — bouton de bascule avec persistance via localStorage
- *Compte à rebours* en temps réel jusqu'au début de l'événement
- *Compteurs animés* (participants, intervenants, jours, pays) déclenchés au scroll
- *Filtrage des intervenants* par catégorie
- *Planning à onglets* (Jour 1 / Jour 2 / Jour 3)
- *Formulaire d'inscription* avec validation côté client (nom, email, téléphone, type de participation, message)
- *FAQ en accordéon* (<details> / <summary>)
- *Menu hamburger* responsive + navbar qui change de style au scroll
- *Animations au scroll* (fade-in, zoom, effets de survol)
- Design *responsive* (breakpoints tablette 768–1024px et mobile 375–480px)

## 🛠️ Technologies utilisées

- HTML5 / CSS3 (variables CSS, Grid, Flexbox, media queries)
- JavaScript vanilla (pas de framework)
- [Bootstrap Icons](https://icons.getbootstrap.com/) via CDN
- Google Fonts : Poppins, Roboto, Open Sans, Inter
- Google Maps (iframe intégré) pour la localisation

## 🚀 Installation / utilisation

Aucune dépendance ni build n'est nécessaire, il s'agit d'un site statique.

1. Cloner ou télécharger le projet
2. Ouvrir index.html dans un navigateur, ou servir le dossier avec un serveur local, par exemple :
   ```bash
      git clone  https://github.com/mariata221/Ba-Mariata-AfriconnectSummit.git