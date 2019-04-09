const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  const data = {
    message: 'hello squad',
    markup: '<span>IronHack Module 2</span>',
    myMood: Math.random() > 0.5 ? 'happy mood' : 'sad'
  };
  res.render('index.hbs', data);
});

app.use(express.static('/views'));

app.get('/home', (req, res) => {
  res.sendFile(`${__dirname}/views/home.html`);
});
app.get('/gallery', (req, res) => {
  res.sendFile(`${__dirname}/views/gallery.html`);
});
app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/views/about.html`);
});
app.listen(3213, () => {
  console.log('your express app is running');
});
