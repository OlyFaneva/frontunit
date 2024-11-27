# Utiliser une image Node.js de base
FROM node:18

# Définir le répertoire de travail dans le container
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Construire l'application React pour la production
RUN npm run build

# Exposer le port 80 pour l'accès web
EXPOSE 80

# Démarrer l'application
CMD ["npm", "start"]
