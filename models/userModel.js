const pool = require("../config/db");

class User {
    static allUser = async (next) => {
        const findQuery = `SELECT * FROM users`;

        try {
            return await pool.query(findQuery);
        } catch (err) {
            throw err;
        }
    };

    static userById = async (id, next) => {
        const findQuery = `SELECT * FROM users WHERE id = $1`;

        try {
            const data = await pool.query(findQuery, [id]);

            return data.rows[0];
        } catch (err) {
            throw err;
        }
    };

    static createUser = async (params, next) => {
        try {
            const {email, gender, password, role} = params;
            const newQuery = `
                INSERT INTO users (email, gender, password, role)
                    VALUES
                    ($1,$2,$3,$4)
            `;

            if (email && gender && password && role) {
                return await pool.query(newQuery, [email, gender, password, role]);
            }
        } catch (err) {
            throw err;
        }
    };

    static updateUser = async (params, id, next) => {
        try {
            const {email, gender, password, role} = params;

            const updateQuery = `
                UPDATE users 
                    SET 
                    email = $1,
                    gender = $2,
                    password = $3,
                    role = $4
                        WHERE id = $5
            `;

            if (email && gender && password && role) {
                return await pool.query(updateQuery, [email, gender, password, role, id]);
            }
        } catch (err) {
            throw err;
        }
    };

    static deleteUser = async (id, next) => {
        try {
            const deleteQuery = `DELETE FROM users WHERE id = $1 RETURNING *`;

            const data = await pool.query(deleteQuery, [id]);
            return data.rows[0];
        } catch (err) {
            throw err;
        }
    };
}

module.exports = User;
