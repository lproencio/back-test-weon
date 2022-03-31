const mongoose = require("mongoose");

const Person = mongoose.model("User", {
  type: String,
  name: String,
  document: String,
});

module.exports = Person;
