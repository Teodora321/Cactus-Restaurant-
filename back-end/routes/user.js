const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.user.get);

router.put('/:id', controllers.user.post.putOne);
router.delete('/:id', controllers.user.post.deleteOne)

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

module.exports = router;