
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

    //TO FILTER LIMIT WITH 10 BY DEFAULT THEN ANY NUMBER
    // /api/movies/?limit=2
    let { limit = 10, page = 1, category } = req.query;
    const limitRecords = parseInt(limit);

    /**FOR PAGE
     * /api/movies/?limit=2&page=2
    */
    const skip = (page -1) * limit;

    //CATEGORY IS /api/movies/?category
    //SHOW ALL DATA
    try {
        const movies = await Movie.find({ category: category }).limit(limitRecords).skip(skip);
        res.json(movies);
    } catch (error) {
        res.status(400).json({ message: error });
    }

}


// async function insertMovies() {
//     try {
//         await Movie.insertMany([
//             {
//                 "name":'The A',
//                 "description": "it has A",
//                 "category": ["action", "drama"],
//                 "thumbnail": "the big A"
//             },
//             {
//                 "name":'The B',
//                 "description": "it has B",
//                 "category": ["action", "comedy"],
//                 "thumbnail": "the big B"
//             },
//             {
//                 "name":'The C',
//                 "description": "it has C",
//                 "category": ["comedy", "drama"],
//                 "thumbnail": "the big C"
//             },
//             {
//                 "name":'The D',
//                 "description": "it has D",
//                 "category": ["adventure", "sci-fi"],
//                 "thumbnail": "the big D"
//             },
//             {
//                 "name":'The E',
//                 "description": "it has E",
//                 "category": ["sci-fi", "drama"],
//                 "thumbnail": "the big E"
//             },
//             {
//                 "name":'The F',
//                 "description": "it has F",
//                 "category": ["fight", "adventure"],
//                 "thumbnail": "the big F"
//             },
//             {
//                 "name":'The G',
//                 "description": "it has G",
//                 "category": ["Sci-fi", "adventure"],
//                 "thumbnail": "the big G"
//             },
//             {
//                 "name":'The H',
//                 "description": "it has H",
//                 "category": ["drama", "history"],
//                 "thumbnail": "the big H"
//             },
//             {
//                 "name":'The I',
//                 "description": "it has I",
//                 "category": ["history", "adventure"],
//                 "thumbnail": "the big I"
//             },
//             {
//                 "name":'The J',
//                 "description": "it has J",
//                 "category": ["comedy", "sci-fi"],
//                 "thumbnail": "the big J"
//             },
//         ]);
//     } catch (error) {
        
//     }
// }

// //INSERT MOVIE
// insertMovies();