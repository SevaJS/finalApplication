const {Schema, model} = require("mongoose");

const collectionItem = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: String, required: true},
    img:
        {
            data: Buffer,
            contentType: String
        },
    motherCollId: {type: String, required: true}

})
module.exports = model("collitems", collectionItem)
