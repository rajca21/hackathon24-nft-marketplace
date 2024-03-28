const User = require('../models/userModel');

const getUser = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getUser,
};
