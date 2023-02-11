const { Schema, model } = require('mongoose');

const userSchema = new Schema(
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
            //validation matching regex for email provided by challenge 17
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
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
        }, 
        id: false,
    }
);

//virtual document to calculate length of friends array for get on specific User
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });

    const User = model('course', userSchema);
    module.exports = User;