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
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    imageCover: {
      type: String,
      required: [true, 'An NFT must have a cover image.'],
    },
    images: [String],
    startDates: [Date],
    creator: {
      type: String,
      default: null,
    },
    owner: {
      type: String,
      default: null,
    },
    ownerSC: {
      type: String,
      default: '',
    },
    seller: {
      type: String,
      default: null,
    },
    sellerSC: {
      type: String,
      default: '',
    },
    nftCollection: {
      type: String,
      default: null,
    },
    royalties: {
      type: String,
      default: 0,
    },
    size: {
      type: String,
      default: 0,
    },
    properties: {
      type: String,
      default: '',
    },
    tokenID: {
      type: Number,
    },
    tokenURI: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
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
