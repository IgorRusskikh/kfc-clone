const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    maxLength: 255,
  },
  name: {
    type: String,
    maxLength: 90,
  },
  surname: {
    type: String,
    maxLength: 90,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
