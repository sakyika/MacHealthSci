const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { String, unique: true, lowercase: true },
    password: String
});

const UserModelClass = mongoose.model('users', userSchema);