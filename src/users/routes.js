const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getUsers);
router.post("/", controller.addUser)
router.get('/:id', controller.getUserById)
router.delete('/:id', controller.deleteUser)
router.put("/:id", controller.updateUser)

module.exports = router;