const Person = require("../model/User");

module.exports = {
  async create(req, res) {
    try {
      const user_body = req.body.user;

      const new_user = await Person.create(user_body);

      return res.status(200).json(new_user);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  },
};
