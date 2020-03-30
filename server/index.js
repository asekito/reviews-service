/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const app = express();
const PORT = 3000;
const path = require('path');
const model = require('./model/index.js');

// app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/reviews/', (req, res) => {
  model.reviews.getAll().then(result => {
    res.json(result);
  });
});

app.get('/api/reviews/:locationId', (req, res) => {
  const { locationId } = req.params;
  model.reviews.getOne(locationId).then(result => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
