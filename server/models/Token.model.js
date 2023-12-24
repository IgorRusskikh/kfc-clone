const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: true,
  },
  expireAt: {
    type: Date,
    default: Date.now,
    expires: 10,
  },
});

module.exports = mongoose.model("Token", tokenSchema);
