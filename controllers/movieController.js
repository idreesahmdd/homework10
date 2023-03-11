const MovieService = require("../services/movieService")

class MovieController {
    static findMovie = async (req, res, next) => {
        try {
            const data = await MovieService.findMovie(next)

            res.status(200).json(data.rows)
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
            })
            throw err
        }
    }

    static findMovieById = async (req, res, next) => {
        try {
            const {id} = req.params
            const data = await MovieService.findMovieById(id, res, next)

            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({
                    message: "Movie not found",
                })
            }
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
            })
            throw err
        }
    }

    static createMovie = async (req, res, next) => {
        try {
            const data = await MovieService.createMovie(req.body, res, next)

            if (data) {
                res.status(201).json({
                    message: "New movie created successfully.",
                })
            } else {
                res.status(400).json({
                    message: "failed create new movie",
                })
            }
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
                err,
            })
            throw err
        }
    }

    static updateMovie = async (req, res, next) => {
        try {
            const {id} = req.params

            const data = await MovieService.updateMovie(req.body, id, res, next)

            if (data) {
                res.status(200).json({
                    message: "Updated movie successfully",
                })
            } else {
                res.status(400).json({
                    message: "Updated movie failed",
                })
            }
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
            })
            throw err
        }
    }

    static deleteMovie = async (req, res, next) => {
        try {
            const {id} = req.params

            const data = await MovieService.deleteMovie(id, next)

            if (data) {
                res.status(200).json({
                    message: "Deleted movie successfully",
                })
            } else {
                res.status(404).json({
                    message: "Movie not found",
                })
            }
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
            })
            throw err
        }
    }
}

module.exports = MovieController
