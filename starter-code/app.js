const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send();
});

app.get('/index', (req, res) => {
  res.sendFile(`${__dirname}/index/home.html`);
  res.sendFile(`${__dirname}/index/gallery.html`);
  res.sendFile(`${__dirname}/index/about.html`);
});

app.listen(3003, () => {
  console.log('your express app is running');
});
