const express = require('express');
const app = express();
const connectDB = require('./config/db');
// Middleware pour analyser les données JSON
app.use(express.json());

// Routes (sera complété plus tard)
app.get('/', (req, res) => {
 res.send('Bienvenue dans votre serveur structuré !');
});
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
app.use('/users', userRoutes);
app.use('/users', productRoutes);

console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();

app.listen(3000, () => {
 console.log('Le serveur fonctionne sur le port 3000');
});

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// Définir un écouteur pour un événement
eventEmitter.on('salut', (nom) => {
 console.log(`Salut, ${nom} !`);
});
// Déclencher l'événement
eventEmitter.emit('salut', 'Alice');

eventEmitter.once('connexion', () => {
 console.log('Connexion établie une seule fois');
});
eventEmitter.emit('connexion');
eventEmitter.emit('connexion'); // Ne sera pas exécuté

//Créer un système de notifications qui se déclenche lorsqu'un événement nouveauMessage est déclenché lorsqu'un nouveau message arrive
eventEmitter.on('nouveauMessage', (message ,user) => {
 console.log(`Nouveau message reçu : ${message} ${user}`);});

 eventEmitter.emit('nouveauMessage', 'Bonjour, ceci est un test !' , 'ali');
  eventEmitter.emit('nouveauMessage', 'Bonjour, ceci est un test 2 ', 'ali');

module.exports = app;