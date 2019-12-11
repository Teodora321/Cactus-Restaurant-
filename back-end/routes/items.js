const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.items.getAll);
router.get('/:id', controllers.items.getDetails)

module.exports = router;