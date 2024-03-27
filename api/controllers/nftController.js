const NFT = require('../models/nftModel');

const getAllNFTs = async (req, res) => {
  try {
    const nfts = await NFT.find();

    res.status(200).json({
      status: 'success',
      results: nfts.length,
      data: nfts,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

const createNFT = async (req, res) => {
  try {
    const newNFT = await NFT.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        nft: newNFT,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

const getSingleNFT = async (req, res) => {
  try {
    const nft = await NFT.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: nft,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

const updateNFT = async (req, res) => {
  try {
    const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(202).json({
      status: 'success',
      data: nft,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

const deleteNFT = async (req, res) => {
  try {
    const nft = await NFT.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

module.exports = {
  getAllNFTs,
  getSingleNFT,
  createNFT,
  updateNFT,
  deleteNFT,
};
