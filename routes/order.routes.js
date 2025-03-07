const router = require('express').Router();
const orderController = require('../controllers/orderController');
const isAdmin = require('../middlewares/isAdmin');
const verifyToken = require('../middlewares/verifyToken');

router.get('/orders', isAdmin, verifyToken, orderController.getAll);
router.post('/orders',verifyToken, orderController.createOrder);



module.exports = router;