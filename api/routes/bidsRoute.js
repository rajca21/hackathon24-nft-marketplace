const express = require('express');
const { getAllBids, createBid } = require('../controllers/bidController');

const router = express.Router();

// Routes
router.route('/').get(getAllBids).post(createBid);

module.exports = router;
