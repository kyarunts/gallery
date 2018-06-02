const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 8080;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://kyarunts:kyarunts@ds151355.mlab.com:51355/village');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const artistsRoutes = require('./routes/Artist');

app.use('/api/artists', artistsRoutes);

app.listen(port);