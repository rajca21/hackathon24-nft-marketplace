const express = require('express');
const {
  getUser,
  updateUser,
  getUsers,
} = require('../controllers/userController');

const router = express.Router();

router.route('/').get(getUsers);
router.route('/:id').get(getUser).patch(updateUser);

module.exports = router;
