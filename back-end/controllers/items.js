const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Item.find()
            .then((items) => {
                let data = items.map(item => {
                    return {
                        _id: item._id,
                        type: item.type,
                        title: item.title,
                        price: item.price,
                        description: item.description,
                        imageUrl: item.imageUrl
                    }

                })
                res.send(data)

            })
            .catch(next);
    },

    post: (req, res, next) => {
        const { type, description, imageUrl, title, price } = req.body;

        models.Item.create({ type, description, imageUrl, title, price })
            .then((createdItem) => res.send(createdItem))
            .catch(next)
    },
    getOne: (req, res, next) => {
        const id = req.params.id;
        console.log(id)
        models.Item.findById( id )
            .then((item) => {
                res.send(item)
            })
            .catch(err => {
            })

    }
}

