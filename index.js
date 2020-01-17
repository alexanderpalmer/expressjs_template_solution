const express = require('express');
const morgan = require('morgan');
const movieRouter = require('./movie');

// Instanz von Express erzeugen
const app = express();

// Middleware für Einbindung statischer Inhalte, wie z.B. CSS-Dateien
app.use(express.static(__dirname + '/public'));

// Standardroute setzen
app.get('/', (request, response) => response.redirect('/movie'));

// Middleware Funktion fürs Logging
app.use(morgan('dev', {immediate:true}));

// Anfrage auf localhost/movie an Router weiterleiten
app.use('/movie', movieRouter);


app.listen(8080, ()=>{
  console.log('Server ist listening on port 8080');
})
