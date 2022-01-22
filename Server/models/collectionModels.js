const {Schema, model} = require("mongoose");

const Collection = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    theme: {type: String, required: true},
    description: {type: String, required: true},
    picture: {type: String},
    items: {type: String}

})
module.exports = model("Collection", Collection)
