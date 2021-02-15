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
    creatorName: {
          type: String,
    },
    creatorDisplay: {
        type: String,
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