const express = require('express');
const app = express();

// Route GET pour la page d'accueil
app.post('/', (req, res) => {
  res.send('Hello, Express!');
});

// Route GET pour la page about
app.get('/about', (req, res) => {
    res.send('Ceci est la page About.');
  });
  
// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
