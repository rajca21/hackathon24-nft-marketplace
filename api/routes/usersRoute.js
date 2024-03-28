const express = require('express');
const { getUser, updateUser } = require('../controllers/userController');

const router = express.Router();

router.route('/:id').get(getUser).patch(updateUser);

module.exports = router;
