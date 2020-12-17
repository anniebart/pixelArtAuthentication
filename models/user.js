const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserSchema = new Schema({
username: {
        type: String,
        required: true,
        unique: true
    },
hash: {
        type: String,
        required: true,
        unique: false
    }
    
});



module.exports = mongoose.model('User', UserSchema)