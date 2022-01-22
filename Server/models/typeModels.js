const {Schema, model} = require("mongoose");
const userSchema = new Schema({
    type: {type: String, unique: true, required: true},


})

module.exports = model("Type", userSchema);