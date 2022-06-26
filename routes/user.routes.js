const router = require('express').Router();
const userController = require('../controllers/userController');


router.get('/user', userController.getAll);
router.post('/user', userController.createUser);
router.get('/user/:id', userController.getUserById);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);


module.exports = router;