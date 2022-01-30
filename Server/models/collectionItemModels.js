const {Schema, model} = require("mongoose");

const collectionItem = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: String, required: true},
    picture: {type: Array},
    motherCollId: {type: String, required: true},
    comments: {type: Array},
    rating: {type: String, default: 0}

})
module.exports = model("collitems", collectionItem)
