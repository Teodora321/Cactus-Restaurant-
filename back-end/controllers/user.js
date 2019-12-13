const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    },
    getUser: (req, res, next) => {
        const id = req.params.id;
        models.User.find({ _id: id })
            .then(data => {
                const { name, address, email } = data[0]; 
                userDetails = { name, address, email };
                return userDetails;
            })
            .then((user) => res.send(user))
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
            const { email, password } = req.body;
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

        put: (req, res, next) => {
            const id = req.params.id;
            const { name, email, address } = req.body;
            const query = { name, email, address }
            models.User.findOneAndUpdate({ _id: id }, query, { new: true })
                .then((updatedUser) => res.send(updatedUser))
                .catch(err => console.log(err))
        },

        delete: (req, res, next) => {
            const id = req.params.id;
            models.User.deleteOne({ _id: id })
                .then((removedUser) => res.send(removedUser))
                .catch(next)
        },

        // getOne: (req, res, next) => {
        //     const id = req.params.id;
        //     models.User.find({ _id: id })
        //         .then((user) => {
        //             if (!user) { res.status(404).send("User Not Found!"); return; }
        //             res.send(user);
        //         })
        //         .catch(next)
        // },
        putOne: (req, res, next) => {
            const { id } = req.body;
            const _id = req.params.id;
            models.User.findOneAndUpdate({ _id }, { $push: { cart: id } }, { new: true }).populate('cart')
                .then((modifiedUser) => {
                    console.log(modifiedUser);
                    res.send(modifiedUser);
                }).catch(next);
        },
        // deleteOne: (req, res, next) => {
        //     const { id } = req.body;
        //     const _id = req.params.id;
        //     models.User.findOneAndUpdate({ _id }, { $pull: { cart: id } }, { new: true }).populate('cart')
        //         .then((modifiedUser) => {
        //             console.log(modifiedUser);
        //             res.send(modifiedUser);
        //         }).catch(next);
        // },
    }

};