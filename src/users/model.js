const pool = require('../../db');
const queries = require('./queries');

const findUserByEmail = async (email) => {
    return new Promise((resolve, reject) => {
        pool.query(queries.getUserByEmail, [email], (error, results) => {
            if (error) reject(error);
            resolve(results.rows[0]);
        });
    });
}

module.exports = {
    findUserByEmail,
}