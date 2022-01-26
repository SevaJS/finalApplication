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

})
module.exports = model("Collection", Collection)
