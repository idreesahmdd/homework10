const MovieModel = require("../models/movieModel")

class MovieRepository {
    static findMovie = async (next) => {
        try {
            return await MovieModel.allMovie(next)
        } catch (err) {
            next(err)
        }
    }

    static findMovieById = async (id, next) => {
        try {
            return await MovieModel.movieById(id, next)
        } catch (err) {
            next(err)
        }
    }

    static createMovie = async (params, next) => {
        try {
            return await MovieModel.createMovie(params, next)
        } catch (err) {
            next(err)
        }
    }

    static updateMovie = async (params, id, next) => {
        try {
            return await MovieModel.updateMovie(params, id, next)
        } catch (err) {
            next(err)
        }
    }

    static deleteMovie = async (id, next) => {
        try {
            return await MovieModel.deleteMovie(id, next)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = MovieRepository
