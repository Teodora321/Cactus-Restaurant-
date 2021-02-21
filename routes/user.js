const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.user.get);

router.put('/:id', controllers.user.post.putOne);
//router.put('/:id', controllers.user.post.deleteOne);

router.get('/:id', controllers.user.getUser);
router.put('/:id', controllers.user.post.put);
router.delete('/:id', controllers.user.post.delete);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

module.exports = router;