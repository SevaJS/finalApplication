const {Schema, model} = require("mongoose");

const collectionItem = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    img:
        {
            data: Buffer,
            contentType: String
        }

})
module.exports = model("collitems", collectionItem)
