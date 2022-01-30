const {Schema, model} = require("mongoose");

const Collection = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    theme: {type: String, required: true},
    description: {type: String, required: true},
    picture: {type: String, required: true},
    items: {type: Array},
    rating: {type: String, default: 0},
    authorName: {type: String, required: true}


})
module.exports = model("Collection", Collection)
