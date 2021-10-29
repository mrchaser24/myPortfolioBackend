
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
    


}


async function insertMovies() {
    try {
        await Movie.insertMany([
            {
                "name":'The A',
                "description": "it has A",
                "category": ["action", "drama"],
                "thumbnail": "the big A"
            },
            {
                "name":'The B',
                "description": "it has B",
                "category": ["action", "comedy"],
                "thumbnail": "the big B"
            },
            {
                "name":'The C',
                "description": "it has C",
                "category": ["comedy", "drama"],
                "thumbnail": "the big C"
            },
            {
                "name":'The D',
                "description": "it has D",
                "category": ["adventure", "sci-fi"],
                "thumbnail": "the big D"
            },
            {
                "name":'The E',
                "description": "it has E",
                "category": ["sci-fi", "drama"],
                "thumbnail": "the big E"
            },
            {
                "name":'The F',
                "description": "it has F",
                "category": ["fight", "adventure"],
                "thumbnail": "the big F"
            },
            {
                "name":'The G',
                "description": "it has G",
                "category": ["Sci-fi", "adventure"],
                "thumbnail": "the big G"
            },
            {
                "name":'The H',
                "description": "it has H",
                "category": ["drama", "history"],
                "thumbnail": "the big H"
            },
            {
                "name":'The I',
                "description": "it has I",
                "category": ["history", "adventure"],
                "thumbnail": "the big I"
            },
            {
                "name":'The J',
                "description": "it has J",
                "category": ["comedy", "sci-fi"],
                "thumbnail": "the big J"
            },
        ]);
    } catch (error) {
        
    }
}

//INSERT MOVIE
insertMovies();