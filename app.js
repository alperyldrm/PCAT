const express = require('express');
const path = require('path');

const app = express();

//MIDDLEWARE
app.use(express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve('temp','index.html'));
});

app.listen(port, () => {
  console.log(`Sunucu belirtilen portta baslatildi : ${port}`);
});
