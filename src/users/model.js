const pool = require('../../db');
const queries = require('./queries');

const findUserByEmail = async (email) => {
    try {
        const results = await pool.query(queries.getUserByEmail, [email]);
        return results.rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = {
    findUserByEmail,
}