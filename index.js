const https = require('https');
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const movieRouter = require('./movie');

const app = express();

// Setzen einer neuen View Engine
app.set('view engine', 'pug');

// Anpassen der öffentlichen Standardverzeichnisses
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (request, response) => response.redirect('/movie'));


app.use(morgan('dev', { immediate: true }));


app.use('/movie', movieRouter);

const options = {
  key: fs.readFileSync('./cert/localhost.key'),
  cert: fs.readFileSync('./cert/localhost.cert')
}

https.createServer(options, app).listen(8080, () => {
  console.log('Server ist listening to http://localhost:8080');
});

