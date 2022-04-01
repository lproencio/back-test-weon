const mongoose = require("mongoose");

const Person = mongoose.model("User", {
  type: String,
  name: String,
  document: { type: String, unique: true },
});

module.exports = Person;
