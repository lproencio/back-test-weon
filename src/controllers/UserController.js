const Person = require("../model/User");

module.exports = {
  async createUser(req, res) {
    try {
      const user_body = req.body.user;

      const new_user = await Person.create(user_body);

      return res.status(200).json(new_user);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  },

  async getUserById(req, res) {
    try {
      const id = req.params.id;

      const user = await Person.findOne({ _id: id });

      return res.status(200).json(user);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  },

  async getUserAll(req, res) {
    try {
      const order_by = req.query.order || "name";
      const sort = req.query.sort || "ASC";
      const limit = req.query.limit || 10;
      const page = req.query.page || 1;
      const skip = (page - 1) * limit;

      const users = await Person.find(null, null, {
        skip: skip,
        limit: limit,
        sort: sort,
      });

      const count = await Person.find();
      const total_pages = await (count.length < limit
        ? 1
        : Math.ceil(count.length / limit));

      return res
        .status(200)
        .json({ users, total_pages, total_users: count.length });
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  },

  async putUser(req, res) {
    try {
      const id = req.params.id;
      const user_body = req.body.user;

      await Person.updateOne({ _id: id }, user_body);

      return res.status(200).json({ message: "updated successfully" });
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const id = req.params.id;

      await Person.deleteOne({ _id: id });

      return res.status(200).json({ message: "delete successfully" });
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  },
};
