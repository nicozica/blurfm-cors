const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/status-json.xsl', async (req, res) => {
  try {
    const icecastResponse = await axios.get('https://radio.indybay.org/status-json.xsl');
    res.send(icecastResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error accessing the Icecast server');
  }
});

app.listen(3000, () => {
  console.log('CORS proxy started on port 3000');
});