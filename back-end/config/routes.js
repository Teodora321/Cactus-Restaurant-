const router = require('../routes/');
const utils = require('../utils');
const config = require('../config/config');

module.exports = (app) => {

    app.use('/api/user', router.user);
    app.use('/api/menu', router.items);
    // app.use('/api/item/id', router.items);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};