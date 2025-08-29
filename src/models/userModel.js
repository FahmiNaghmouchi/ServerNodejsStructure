//create a user schema with username , email , password
const mongoose = require('mongoose');
const { Schema } = mongoose;    
const userSchema = new Schema({
 username: { type: String},
    Name: { type: String },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
