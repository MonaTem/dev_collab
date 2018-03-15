const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Our Site');
});

app.get('about', (req, res) => {
  res.send('Here is Everything You Need to Know About Our Site');
});

app.get('contact', (req, res) => {
  res.send('Contact us at 999-999-9999 or at oursite@gmail.com');
});


app.listen(PORT, () => {
// eslint-disable-next-line
    console.log(`Running on ${PORT}`);
});
