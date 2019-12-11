const models = require('../models');

module.exports = {
    getAll: (req, res, next) => {
        models.Item.find()
            .then(items => res.send(items))
            .catch(next)
    },
    getDetails : (req,res,next) =>{
        const query  = {_id: req.params.id};
        models.Item.findById(query)
        .then(item=> res.send(item))
        .catch(next)
    }
}