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

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
