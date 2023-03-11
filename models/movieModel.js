const pool = require("../config/db")

class Movie {
    static allMovie = async (next) => {
        const findQuery = `SELECT * FROM movies`

        try {
            return await pool.query(findQuery)
        } catch (err) {
            next(err)
        }
    }

    static movieById = async (id, next) => {
        const findQuery = `SELECT * FROM movies WHERE id = $1`

        try {
            const data = await pool.query(findQuery, [id])

            return data.rows[0]
        } catch (err) {
            next(err)
        }
    }

    static createMovie = async (params, next) => {
        try {
            const {title, genres, year} = params
            const newQuery = `
                INSERT INTO movies (title,genres,year)
                    VALUES
                    ($1,$2,$3)
            `

            if (title && genres && year) {
                return await pool.query(newQuery, [title, genres, year])
            }
        } catch (err) {
            next(err)
        }
    }

    static updateMovie = async (params, id, next) => {
        try {
            const {title, genres, year} = params

            const updateQuery = `
                UPDATE movies 
                    SET 
                    title = $1,
                    genres = $2,
                    year = $3
                        WHERE id = $4
            `

            if (title && genres && year) {
                return await pool.query(updateQuery, [title, genres, year, id])
            }
        } catch (err) {
            next(err)
        }
    }

    static deleteMovie = async (id, next) => {
        try {
            const deleteQuery = `DELETE FROM movies WHERE id = $1 RETURNING *`

            const data = await pool.query(deleteQuery, [id])
            return data.rows[0]
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Movie
