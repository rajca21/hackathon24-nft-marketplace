const express = require('express');
const {
  aliasTopNFTs,
  createNFT,
  deleteNFT,
  getAllNFTs,
  getSingleNFT,
  updateNFT,
} = require('../controllers/nftController');

const router = express.Router();

// Routes
router.route('/top-5-nfts').get(aliasTopNFTs, getAllNFTs);

router.route('/').get(getAllNFTs).post(createNFT);
router.route('/:id').get(getSingleNFT).patch(updateNFT).delete(deleteNFT);

module.exports = router;
