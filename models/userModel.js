const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    position: String,
    age: Number,
});

module.exports = mongoose.model('User', userSchema);