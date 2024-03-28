const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
    bidder: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Bid = mongoose.model('Bid', bidSchema);

module.exports = Bid;
