const NFTCollection = require('../models/collectionModel');

const getAllCollections = async (req, res) => {
  try {
    const collections = await NFTCollection.find();

    res.status(200).json({
      status: 'success',
      results: collections.length,
      data: collections,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

const createCollection = async (req, res) => {
  try {
    const newCollection = await NFTCollection.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        collection: newCollection,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

const getSingleCollection = async (req, res) => {
  try {
    const collection = await NFTCollection.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: collection,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

module.exports = { getAllCollections, createCollection, getSingleCollection };
