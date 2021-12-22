const mongoose = require('mongoose')
const validateurUnique = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true}
})

userSchema.plugin(validateurUnique)

module.exports = mongoose.model("user", userSchema);