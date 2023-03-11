const MovieModel = require("../models/movieModel");

class MovieRepository {
    static findMovie = async () => {
        try {
            return await MovieModel.allMovie();
        } catch (err) {
            throw err;
        }
    };

    static findMovieById = async (id) => {
        try {
            return await MovieModel.movieById(id);
        } catch (err) {
            throw err;
        }
    };

    static createMovie = async (params) => {
        try {
            return await MovieModel.createMovie(params);
        } catch (err) {
            throw err;
        }
    };

    static updateMovie = async (params, id) => {
        try {
            return await MovieModel.updateMovie(params, id);
        } catch (err) {
            throw err;
        }
    };

    static deleteMovie = async (id) => {
        try {
            return await MovieModel.deleteMovie(id);
        } catch (err) {
            throw err;
        }
    };
}

module.exports = MovieRepository;
