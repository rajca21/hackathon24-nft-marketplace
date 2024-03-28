const Bid = require('../models/bidModel');
const APIFeatures = require('../utils/apiFeatures');

const getAllBids = async (req, res) => {
  try {
    const features = new APIFeatures(Bid.find(), req.query).filter();
    const bids = await features.query;

    res.status(200).json({
      status: 'success',
      results: bids.length,
      data: bids,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

const createBid = async (req, res) => {
  try {
    const newBid = await Bid.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        bid: newBid,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

module.exports = {
  getAllBids,
  createBid,
};
