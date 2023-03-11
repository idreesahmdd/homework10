const pool = require("../config/db");

class Movie {
    static allMovie = async () => {
        const findQuery = `SELECT * FROM movies`;

        try {
            return await pool.query(findQuery);
        } catch (err) {
            throw err;
        }
    };

    static movieById = async (id) => {
        const findQuery = `SELECT * FROM movies WHERE id = $1`;

        try {
            const data = await pool.query(findQuery, [id]);

            return data.rows[0];
        } catch (err) {
            throw err;
        }
    };

    static createMovie = async (params) => {
        try {
            const {title, genres, year} = params;
            const newQuery = `
                INSERT INTO movies (title,genres,year)
                    VALUES
                    ($1,$2,$3)
            `;

            if (title && genres && year) {
                return await pool.query(newQuery, [title, genres, year]);
            }
        } catch (err) {
            throw err;
        }
    };

    static updateMovie = async (params, id) => {
        try {
            const {title, genres, year} = params;

            const updateQuery = `
                UPDATE movies 
                    SET 
                    title = $1,
                    genres = $2,
                    year = $3
                        WHERE id = $4
            `;

            if (title && genres && year) {
                return await pool.query(updateQuery, [title, genres, year, id]);
            }
        } catch (err) {
            throw err;
        }
    };

    static deleteMovie = async (id) => {
        try {
            const deleteQuery = `DELETE FROM movies WHERE id = $1 RETURNING *`;

            const data = await pool.query(deleteQuery, [id]);
            return data.rows[0];
        } catch (err) {
            throw err;
        }
    };
}

module.exports = Movie;
