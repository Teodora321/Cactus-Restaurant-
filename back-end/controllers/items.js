const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Item.find()
            .then((items) =>
            {
            console.log(items)
            let data = items.map(item => {
                return {
                    _id: item._id,
                    type: item.type,
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    imageUrl:item.imageUrl
                }

            })
            res.send(data)

        })
        .catch(next);
},

    post: (req, res, next) => {
    const { type, description, imgUrl, title, price,  } = req.body;

    models.Item.create({ type, description, imgUrl, title, price, })
        .then((createdItem) => res.send(createdItem))
        .catch(next)
  },
}
// get: (req, res, next) => {
//     models.Favourites.find()
//         .populate('author')
//         .then((favourites) => {
//             // console.log(favourites)
//             let data = favourites.map(element => {
//                 return {
//                     venue: element.venue,
//                     _id: element._id,
//                     author: element.author.username,
//                 }

//             })
//             res.send(data)

//         })
//         .catch(next);
// },
