const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
//requireing moment.js for date formatting
const moment = require('moment');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //getter using moment.js to format date ex "Feb 2023, 10:15 pm"
            get: (date) => moment(date).format('MMM D, YYY, h:mm a')
        },
        username: {
            type: String, 
            required: true,
        },
        reactions: [
            reactionSchema
        ],
    }, 
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;