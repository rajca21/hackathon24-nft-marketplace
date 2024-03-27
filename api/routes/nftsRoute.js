const express = require('express');
const {
  createNFT,
  deleteNFT,
  getAllNFTs,
  getSingleNFT,
  updateNFT,
  checkId,
  checkBody,
} = require('../controllers/nftController');

const router = express.Router();

// ID parameter Middleware
router.param('id', checkId);

// Routes
router.route('/').get(getAllNFTs).post(checkBody, createNFT);
router.route('/:id').get(getSingleNFT).patch(updateNFT).delete(deleteNFT);

module.exports = router;
