const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: () => Promise.resolve(false),
                message:'Invalid email!'
            }

        },
        thoughts: [],
        friends: []
    }
)

const User = model('User', UserSchema);

module.exports= User;