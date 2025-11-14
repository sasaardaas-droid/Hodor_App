# 🎓 Hodor - Gestion de Présences Étudiantes

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://yourusername.github.io/hodor)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Une application web progressive (PWA) complète pour gérer les présences étudiantes multi-années.

## ✨ Fonctionnalités

- 📋 **Onglet Présence** - Gestion complète des présences
  - Bouton Démarrer/Arrêter l'appel
  - Protection contre les modifications accidentelles
  - Filtres par année, séance, date, groupe, spécialité

- 🔐 **Mode Édition Protégé**
  - Les modifications sont désactivées par défaut
  - Cliquez "Démarrer l'appel" pour activer
  - Cliquez "Arrêter et Sauvegarder" pour terminer

- 📱 **Onglet Scanner**
  - Scan de codes-barres en temps réel
  - Intégration html5-qrcode

- 👥 **Onglet Étudiants**
  - Gestion des listes d'étudiants
  - Filtre par groupe
  - Filtres par absence

- 💾 **Sauvegarde Automatique**
  - Cache local (localStorage)
  - Backups automatiques (dernières 5 versions)
  - Restauration au démarrage

- 📊 **Onglet Sauvegarde et Exportation**
  - Export JSON
  - Export CSV (compatible Excel)
  - Import CSV
  - Restauration des backups

- 🌙 **Design Moderne**
  - Mode clair/sombre (basé sur les préférences système)
  - Interface responsive
  - Design system cohérent

## 🚀 Installation rapide

### Option 1 : GitHub Pages (Gratuit)

1. **Forkez ce dépôt**
   - Cliquez sur "Fork" en haut à droite

2. **Activez GitHub Pages**
   - Allez à Settings → Pages
   - Source: Branch `main`, dossier `/ (root)`

3. **Accédez à votre application**
   ```
   https://yourusername.github.io/hodor
   ```

### Option 2 : Installation sur Android

1. **Ouvrez le lien dans Chrome**
   ```
   https://yourusername.github.io/hodor
   ```

2. **Installez l'application**
   - Menu (⋮) → "Installer l'application"
   - Ou : Menu → "Ajouter à l'écran d'accueil"

3. **L'app s'ajoute à votre téléphone**
   - Fonctionnement hors ligne complet

### Option 3 : Convertir en APK

1. **Utilisez PWABuilder**
   ```
   https://www.pwabuilder.com
   ```

2. **Entrez l'URL GitHub Pages**
   ```
   https://yourusername.github.io/hodor
   ```

3. **Téléchargez l'APK Android**
   - Installez directement sur votre téléphone

## 📋 Structure du projet

```
hodor/
├── index.html           # Application principale
├── README.md           # Ce fichier
├── LICENSE             # Licence MIT
└── .gitignore          # Fichiers à ignorer
```

## 💾 Données Utilisateur

- **Stockage** : LocalStorage du navigateur
- **Sauvegarde** : Automatique toutes les 30 secondes
- **Backups** : Les 5 dernières versions conservées
- **Persistance** : Les données restent après fermeture

## 🔒 Sécurité

- ✅ Pas de serveur backend (tout en local)
- ✅ Pas d'envoi de données externes
- ✅ Protection de l'édition par défaut
- ✅ Mode plein écran (PWA)

## 🛠️ Technologies utilisées

- **HTML5** - Structure
- **CSS3** - Styling moderne
- **JavaScript (ES6+)** - Logique
- **PWA Manifest** - Installation
- **Service Worker** - Hors ligne
- **html5-qrcode** - Scanner

## 📲 Compatibilité

- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Edge 88+
- ✅ Safari 14+ (iOS/macOS)
- ✅ Android 6.0+
- ✅ iOS 13+

## 🎯 Utilisation

### Démarrer l'appel des présences

1. Allez à l'onglet **Présence**
2. Sélectionnez l'année et la séance
3. Cliquez sur **"▶️ Démarrer l'appel"**
4. Marquez les présences
5. Cliquez sur **"⏹️ Arrêter et Sauvegarder"**

### Filtrer par groupe

1. Allez à l'onglet **Étudiants**
2. Sélectionnez l'année
3. Choisissez un groupe dans le filtre
4. Affichez la liste filtrée

### Sauvegarder et exporter

1. Allez à l'onglet **Sauvegarde et Exportation**
2. **Export JSON** : Sauvegarde complète
3. **Export CSV** : Compatible Excel
4. **Import CSV** : Chargez vos données
5. **Restaurer** : Récupérez un backup ancien

## 🐛 Bugs et améliorations

Si vous trouvez un bug ou avez une suggestion :
- Ouvrez une [Issue](https://github.com/yourusername/hodor/issues)
- Décrivez le problème/suggestion en détail

## 📄 Licence

Ce projet est sous licence **MIT**. Voir [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- Développé pour la gestion simplifiée des présences
- Conçu pour fonctionner hors ligne
- Optimisé pour mobile et desktop

---

**Hodor - Parce que gérer les présences doit être simple.** 🚀

Dernière mise à jour : 14 novembre 2025
