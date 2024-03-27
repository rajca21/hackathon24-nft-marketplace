const express = require('express');
const fs = require('fs');

const router = express.Router();

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
};

const updateNFT = (req, res) => {
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
};

const deleteNFT = (req, res) => {
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
};

router.route('/').get(getAllNFTs).post(createNFT);
router.route('/:id').get(getSingleNFT).patch(updateNFT).delete(deleteNFT);

module.exports = router;
