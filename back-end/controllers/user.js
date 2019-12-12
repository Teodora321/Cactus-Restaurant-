const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    },

    post: {
        register: (req, res, next) => {

            const { email, name, address, password } = req.body;
            // console.log( 'data',email, name, address, password )
            models.User.create({ email, name, address, password })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
        },

        login: (req, res, next) => {
            const { email, password, name } = req.body;
            models.User.findOne({ email }).populate('cart')
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.authCookieName, token).send({ token, user });
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        },

        getOne: (req, res, next) => {
            const id = req.params.id;
            models.User.find({ _id: id })
                .then((user) => {
                    if (!user) { res.status(404).send("User Not Found!"); return; }
                    res.send(user);
                })
                .catch(next)
        },
        putOne: (req, res, next) => {
            const { id } = req.body;
            const  _id  = req.params.id;
            models.User.findOneAndUpdate({ _id }, { $push: { cart: id } }, { new: true }).populate('cart')
                .then((modifiedUser) => {
                    console.log(modifiedUser);
                    res.send(modifiedUser);
                }).catch(next);
        },
        deleteOne: (req, res, next) => {
            const { id } = req.body;
            const  _id  = req.params.id;
            models.User.findOneAndUpdate({ _id }, { $pull: { cart: id } }, { new: true }).populate('cart')
                .then((modifiedUser) => {
                    console.log(modifiedUser);
                    res.send(modifiedUser);
                }).catch(next);
        },
    }

};