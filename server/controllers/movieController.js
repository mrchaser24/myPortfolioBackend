
//CONNECT TO DB
require('../models/db');
//CONNECT TO SCHEMA
const Movie = require('../models/movie');



/**
 * /api/movies
 * GET all movie
 */


//VIEW
exports.listMovies = async(req, res) => {
    res.send('Hello World');
}