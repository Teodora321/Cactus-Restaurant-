const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.items.get);
router.get('/:id', controllers.items.getOne)

module.exports = router;