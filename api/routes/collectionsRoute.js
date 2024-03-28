const express = require('express');
const {
  getAllCollections,
  createCollection,
  getSingleCollection,
} = require('../controllers/collectionController');

const router = express.Router();

router.route('/').get(getAllCollections).post(createCollection);
router.route('/:id').get(getSingleCollection);

module.exports = router;
