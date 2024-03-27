const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Working API', api: 'NFT Marketplace' });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
