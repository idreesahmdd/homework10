const MovieRepository = require("../repositories/movieRepository");

class MovieService {
    static findMovie = async () => {
        try {
            return await MovieRepository.findMovie();
        } catch (err) {
            throw err;
        }
    };

    static findMovieById = async (id) => {
        try {
            return await MovieRepository.findMovieById(id);
        } catch (err) {
            throw err;
        }
    };

    static createMovie = async (params) => {
        try {
            return await MovieRepository.createMovie(params);
        } catch (err) {
            throw err;
        }
    };

    static updateMovie = async (params, id) => {
        try {
            return await MovieRepository.updateMovie(params, id);
        } catch (err) {
            throw err;
        }
    };

    static deleteMovie = async (id) => {
        try {
            return await MovieRepository.deleteMovie(id);
        } catch (err) {
            throw err;
        }
    };
}

module.exports = MovieService;
