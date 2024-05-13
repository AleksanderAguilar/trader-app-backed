const getUsers = "SELECT * FROM users";

const getUserById = "SELECT * FROM users WHERE id = $1";
const emailExists = "SELECT u FROM users u WHERE u.email = $1;"
const addUser = "INSERT INTO Users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4);"
const deleteUser = "DELETE FROM users WHERE id = $1;"
const updateUser = "UPDATE users SET  password = $2, first_name = $3, last_name = $4 WHERE id = $1;"

module.exports = {
    getUsers,
    getUserById,
    emailExists,
    addUser,
    deleteUser,
    updateUser,
}