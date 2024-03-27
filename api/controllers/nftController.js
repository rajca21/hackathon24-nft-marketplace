const fs = require('fs');

const nfts = JSON.parse(
  fs.readFileSync(`${__dirname}/../sample-data/data/nft-simple.json`)
);

const getAllNFTs = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: nfts.length,
    data: {
      nfts: nfts,
    },
  });
};

const createNFT = (req, res) => {
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
};

const getSingleNFT = (req, res) => {
  const nft = nfts.find((el) => el.id === req.id);

  res.status(200).json({
    status: 'success',
    data: { nft },
  });
};

const updateNFT = (req, res) => {
  res.status(202).json({
    status: 'success',
    data: {
      nft: 'Updating nft',
    },
  });
};

const deleteNFT = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

const checkId = (req, res, next) => {
  if (req.params.id * 1 > nfts.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Not Found - Invalid ID',
    });
  }
  next();
};

const checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing data',
    });
  }
  next();
};

module.exports = {
  getAllNFTs,
  getSingleNFT,
  createNFT,
  updateNFT,
  deleteNFT,
  checkId,
  checkBody,
};
