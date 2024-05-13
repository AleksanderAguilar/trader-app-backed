const pool = require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const { email, password, first_name, last_name } = req.body;
    pool.query(queries.emailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists");
        }
        pool.query(queries.addUser, [email, password, first_name, last_name], (error, results) => {
            if (error) throw error;
            res.status(201).send("Sudent Created Successfully");
            console.log('Student Created')
        });
    });
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUser = !results.rows.length
        if (noUser) {
            res.send("No User Found")
        } else {
            pool.query(queries.deleteUser, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send('User Deleted')
            });
        }
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const { password, first_name, last_name } = req.body;
        pool.query(queries.getUserById, [id], (error, results) => {
            const noUser = !results.rows.length
            if (noUser) {
                res.send("No User Found")
            } else {
                pool.query(queries.updateUser, [id, password, first_name, last_name], (error, results) => {
                    if (error) throw error;
                    res.status(200).send('user updated');
                });
            }
        });
}

module.exports = {
    getUsers: getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,

};