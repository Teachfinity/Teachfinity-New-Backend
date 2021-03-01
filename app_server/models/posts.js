var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var postSchema = new Schema({
    message: {
        type: String, 
        required: true
    },
    imagePath: {
        type: String,
        default: null
    },
    uid: {
        type: String,
    },
    creatorName: {
        type: String,
    },
    creatorDisplay: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: [{
            commentor: {
                type: String
            },
            comment: {
                type: String
            },
            time: {
                type: Date,
                default: Date.now
            }
        }],
    }, 
    classroom:{
        type: mongoose.Types.ObjectId,
        ref: 'Classroom'
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);