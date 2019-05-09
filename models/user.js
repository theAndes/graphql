const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdEvents: [
    //data fields in array
    {
      type: Schema.Types.ObjectId,
      ref: 'Event' //ref our event model
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
