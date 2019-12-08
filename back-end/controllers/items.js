const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Item.find()
            .then((items) => res.send(items))
            .catch(next);
    },

    post: (req, res, next) => {
    const { type, description, imgUrl, title, price, description } = req.body;

    models.Item.create({ type, description, imgUrl, title, price, description })
        .then((createdItem) => res.send(createdItem))
        .catch(next)
  },
}
