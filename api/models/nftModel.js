const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'An NFT must have a name provided.'],
      unique: [true, 'An NFTs name must be unique.'],
      trim: true,
      min: [40, 'An NFTs name must have less than 40 characters.'],
      max: [5, 'An NFTs name must have at least 5 characters.'],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'An NFT must have a duration.'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'An NFT must have a group size.'],
    },
    rating: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0.'],
      max: [5, 'Rating must be below 5.0.'],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A price of NFT must be provided.'],
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'An NFT must have a description.'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'An NFT must have a cover image.'],
    },
    images: [String],
    startDates: [Date],
    secretNft: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const NFT = mongoose.model('NFT', nftSchema);

module.exports = NFT;
