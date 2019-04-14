const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  const meta = {
    title: 'title',
    scripts: ['dom.js']
  };
  res.render('index', meta);
});

app.get('/gallery', (req, res) => {
  const meta = {
    title: 'gallery',
    scripts: ['galleryDOM.js']
  };
  res.render('gallery', meta);
});
app.get('/about', (req, res) => {
  const meta = {
    title: 'about',
    scripts: ['aboutDOM.js']
  };
  res.render('about', meta);
});

app.listen(3016, () => {
  console.log('app is running');
});
