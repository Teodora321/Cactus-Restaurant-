const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const itemSchema = new Schema({
    
    type: {
        type: String,
        required:true
    },
    imageUrl: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },

    description: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

    // author: {
    //     type: ObjectId,
    //     ref: "User"
    // }

});

module.exports = new Model('Item', itemSchema);