var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//creating user schema
var userSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  profilePicture: {
    type: String,
    default: null
  },
  classroomsOwned : {
    type: [{
      cid: {
          type: mongoose.Types.ObjectId,
          ref: 'Classroom'
      }
    }]
  },
  classroomsJoined : {
    type: [{
      cid: {
          type: mongoose.Types.ObjectId,
          ref: 'Classroom'
      }
    }]
  }, 
});

module.exports = mongoose.model('User', userSchema);