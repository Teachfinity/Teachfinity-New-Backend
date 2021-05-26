var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//creating user schema
var quizSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
      type: Date,
      required: true,
  },
  marks: {
      type: String,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  class: {
    type: mongoose.Types.ObjectId,
    ref: 'Classroom'
  },
  questions: [{
      type: String
  }],
  mcqs: [{
          question: String,
          options:[{
            type: String
  }],
          correctoption: String
  }],
  students : {
    type: [{
      sid: {
          type: mongoose.Types.ObjectId,
          ref: 'User'
      },
      answer:[{
          answers:[{
            type: String
          }],
          mcqs: [{
            type: String
          }]
      }],
      // marks: {type: String}
    }]
  },
  allMarks: [{
    sid: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
  },
  marks: {
    type: String
  }
  }] 
});

module.exports = mongoose.model('Quiz', quizSchema);