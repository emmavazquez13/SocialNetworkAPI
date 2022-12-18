const {Schema, model} = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectID
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true, 
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => timestamp.toLocalString(),
            
        },
        updateAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => timestamp.toLocalString(),
            
        }
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
          getters: true,
        },
        id: false,
        timestamps: true,
      }
)

module.exports = reactionSchema;
