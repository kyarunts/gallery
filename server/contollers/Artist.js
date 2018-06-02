const Artist = require('../models/Artist');
const crud = require('../generics/crud');

exports.getByQuery = (req, res) => {
    crud.getByQuery(req.query, res, Artist);
}
