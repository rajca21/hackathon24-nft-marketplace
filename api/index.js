const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Working API', api: 'NFT Marketplace' });
});

const nfts = JSON.parse(
  fs.readFileSync(`${__dirname}/sample-data/data/nft-simple.json`)
);

const getAllNfts = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: nfts.length,
    data: {
      nfts: nfts,
    },
  });
};

app.get('/api/v1/nfts', getAllNfts);

app.get('/api/v1/nfts/:id', (req, res) => {
  const id = req.params.id * 1; // converting to number
  const nft = nfts.find((el) => el.id === id);

  if (!nft) {
    return res.status(404).json({
      status: 'fail',
      message: 'Not Found - Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: { nft },
  });
});

app.post('/api/v1/nfts', (req, res) => {
  const newId = nfts[nfts.length - 1].id + 1;
  const newNFT = Object.assign(
    {
      id: newId,
    },
    req.body
  );
  nfts.push(newNFT);
  fs.writeFile(
    `${__dirname}/sample-data/data/nft-simple.json`,
    JSON.stringify(nfts),
    (err) => {
      res.status(201).json({
        status: 'success',
        nft: newNFT,
      });
    }
  );
});

app.patch('/api/v1/nfts/:id', (req, res) => {
  const id = req.params.id * 1; // converting to number
  const nft = nfts.find((el) => el.id === id);

  if (!nft) {
    return res.status(404).json({
      status: 'fail',
      message: 'Not Found - Invalid ID',
    });
  }

  res.status(202).json({
    status: 'success',
    data: {
      nft: 'Updating nft',
    },
  });
});

app.delete('/api/v1/nfts/:id', (req, res) => {
  const id = req.params.id * 1; // converting to number
  const nft = nfts.find((el) => el.id === id);

  if (!nft) {
    return res.status(404).json({
      status: 'fail',
      message: 'Not Found - Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
