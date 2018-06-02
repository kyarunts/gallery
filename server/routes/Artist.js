const express = require('express');
const artistRouter = express.Router();

const artistController = require('../contollers/Artist');

artistRouter.route('/')
    .get(artistController.getByQuery);

module.exports = artistRouter;
