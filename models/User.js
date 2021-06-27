const { Schema, Model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
    }
})