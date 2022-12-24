const {Schema, model} = require('mongoose');

const Reaction = require('./reaction.js')

const thoughtSchema = new Schema({
    thoughtText:{
        type: String,
        required:[true, "please add a new thought"],
        maxLength:[280, "please enter characters between 1-280"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => timestamp.toLocalString(),
    },
    userId: {
        type: Schema.Types.ObjectId, 
        required: true
    },
    username: {
        type: String,
        required: true, 
    },
    reactions: [Reaction]
},{
    toJSON: {
      virtuals: true,
      getters: true,
      },
      timeStamps: true,
      id: false,
}
)
thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})
const Thought = model('Thought', thoughtSchema);
  
module.exports = Thought;