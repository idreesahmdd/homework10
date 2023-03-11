const MovieRepository = require("../repositories/movieRepository")

class MovieService {
    static findMovie = async (next) => {
        try {
            return await MovieRepository.findMovie(next)
        } catch (err) {
            next(err)
        }
    }

    static findMovieById = async (id, next) => {
        try {
            return await MovieRepository.findMovieById(id, next)
        } catch (err) {
            next(err)
        }
    }

    static createMovie = async (params, next) => {
        try {
            return await MovieRepository.createMovie(params, next)
        } catch (err) {
            next(err)
        }
    }

    static updateMovie = async (params, id, next) => {
        try {
            return await MovieRepository.updateMovie(params, id, next)
        } catch (err) {
            next(err)
        }
    }

    static deleteMovie = async (id, next) => {
        try {
            return await MovieRepository.deleteMovie(id, next)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = MovieService
