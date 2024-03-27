const express = require('express');

const router = express.Router();

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};

const getSingleUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getSingleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
