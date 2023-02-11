const { Schema, Types } = require('mongoose');
//requireing moment.js for date formatting
const moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId, 
            default: () => Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //getter using moment.js to format date ex "Feb 2023, 10:15 pm"
            get: (date) => moment(date).format('MMM D, YYY, h:mm a')
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

//only exists as schema, it does not need to instantiate a model
module.exports = reactionSchema;