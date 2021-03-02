const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser);

module.exports = router;