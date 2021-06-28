const { Schema, model } = require('mongoose');
require('mongoose-type-email');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        work: Mongoose.SchemaTypes.Email,
        home: Mongoose.SchemaTypes.Email
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            re: 'Thought'
        }
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

// create a virtual for total friends for User
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create new User model using UserSchema
const User = model ('User', UserSchema);

// export User model
module.exports = User;