const {Schema, model} = require("mongoose");
const userSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {type: String, default: "USER"},
    nickName: {type: String, default: " "},
    description: {type: String, default: " "},
    avatar: {type: String},


})

module.exports = model("User", userSchema);