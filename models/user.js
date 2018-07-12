const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    role: String,
    googleId: String,
    thumbnail: String
});

const USER = mongoose.model('user', userSchema);

module.exports = USER;