const express = require('express');
    
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  const photo = {
    ID: 1,
    name: 'Photo Name',
    description: 'Photo desc.',
  };
  res.send(photo);
});

app.listen(port, () => {
  console.log(`Sunucu belirtilen portta baslatildi : ${port}`);
});
