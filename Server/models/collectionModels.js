const {Schema, model} = require("mongoose");

const Collection = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    theme: {type: String, required: true},
    description: {type: String, required: true},
    img:
        {
            data: Buffer,
            contentType: String
        },
    items: [],
    rating: {type: String, default: 0}


})
module.exports = model("Collection", Collection)
