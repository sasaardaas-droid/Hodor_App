# 📖 Guide Installation GitHub Pages

## Étape 1 : Créer un compte GitHub

1. Visitez [github.com](https://github.com)
2. Cliquez sur "Sign up"
3. Remplissez les informations
4. Confirmez votre email

## Étape 2 : Créer un nouveau dépôt

1. Allez à votre profil
2. Cliquez sur "Repositories"
3. Cliquez sur "New" (Nouveau)

**Paramètres du dépôt :**
- **Repository name** : `hodor`
- **Description** : "Application de gestion de présences étudiantes"
- **Public** : ✓ (sélectionné)
- **Add a README file** : Non (on va l'ajouter)

4. Cliquez sur "Create repository"

## Étape 3 : Ajouter les fichiers

### Option A : Upload direct

1. Dans votre dépôt, cliquez sur "Add file" → "Upload files"
2. Drag & drop les fichiers :
   - `index.html`
   - `README.md`
   - `LICENSE`
   - `.gitignore`
3. Cliquez sur "Commit changes"

### Option B : Ligne de commande (Git)

```bash
# Clonez le dépôt
git clone https://github.com/yourusername/hodor.git
cd hodor

# Copiez les fichiers dans le dossier
# (index.html, README.md, LICENSE, .gitignore)

# Ajoutez les fichiers
git add .

# Committez les changements
git commit -m "Initial commit - Add Hodor application"

# Poussez vers GitHub
git push origin main
```

## Étape 4 : Activer GitHub Pages

1. Allez à Settings (Paramètres)
2. Scroll jusqu'à "GitHub Pages"
3. **Source** : sélectionnez "Deploy from a branch"
4. **Branch** : `main`, dossier `/ (root)`
5. Cliquez sur "Save"

## Étape 5 : Attendez et accédez

1. GitHub Pages génère votre site (2-3 minutes)
2. Allez à :
   ```
   https://yourusername.github.io/hodor
   ```

3. Votre application Hodor est en ligne ! 🎉

## 📱 Installation sur téléphone

### Android via Chrome
1. Ouvrez l'URL dans Chrome
2. Menu (⋮) → "Installer l'application"
3. L'app s'ajoute à l'écran d'accueil

### Convertir en APK
1. Allez sur [PWABuilder](https://www.pwabuilder.com)
2. Entrez votre URL GitHub Pages
3. Téléchargez l'APK
4. Installez sur Android

## 🔄 Mettre à jour l'application

Pour mettre à jour Hodor :

1. Modifiez les fichiers localement
2. Committez et poussez sur GitHub :
   ```bash
   git add .
   git commit -m "Update Hodor"
   git push origin main
   ```
3. GitHub Pages se met à jour automatiquement

## ✅ Vérification

Après activation de GitHub Pages, vérifiez :

- ✓ L'URL est accessible
- ✓ La page charge correctement
- ✓ Les onglets fonctionnent
- ✓ Les données se sauvegardent
- ✓ L'app est installable sur Android

## 🆘 Problèmes courants

### "404 - Page not found"
- Vérifiez que le dossier est `/ (root)`
- Attendez 5 minutes après activation
- Actualisez le navigateur (Ctrl+Shift+R)

### GitHub Pages n'apparaît pas dans Settings
- Assurez-vous que le dépôt est **Public**
- Le dépôt doit avoir au moins 1 fichier

### Les changements ne s'affichent pas
- Attendez 2-3 minutes
- Videz le cache du navigateur
- Utilisez Ctrl+Shift+R pour forcer le rechargement

## 📞 Support

Pour plus d'aide :
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Community Forum](https://github.community)
