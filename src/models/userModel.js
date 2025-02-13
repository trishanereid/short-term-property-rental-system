const { default: mongoose } = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
  },
  phone: {
    type: String,
    required: [true, 'Please enter the phone number'],
  },
});

module.exports = mongoose.model('User', userSchema);
