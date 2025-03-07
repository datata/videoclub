const router = require('express').Router();
const filmController = require('../controllers/filmController');
const isAdmin = require('../middlewares/isAdmin');
const verifyToken = require('../middlewares/verifyToken');

router.get('/films',filmController.getAll);
router.post('/films',verifyToken, isAdmin, filmController.addFilm);
router.get('/films/id/:id',filmController.getFilmById);
router.get('/films/title',filmController.getFilmByTitle);

module.exports = router;