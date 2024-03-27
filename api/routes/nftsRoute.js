const express = require('express');
const {
  createNFT,
  deleteNFT,
  getAllNFTs,
  getSingleNFT,
  updateNFT,
} = require('../controllers/nftController');

const router = express.Router();

// Routes
router.route('/').get(getAllNFTs).post(createNFT);
router.route('/:id').get(getSingleNFT).patch(updateNFT).delete(deleteNFT);

module.exports = router;
