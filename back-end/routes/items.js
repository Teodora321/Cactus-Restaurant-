const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/menu', controllers.items.get);

module.exports = router;