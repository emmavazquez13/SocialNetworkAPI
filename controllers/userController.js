const { User, Thought } = require("../models/index");

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((error) => res.status(500).json(error));
  },
  getUserbyID(req, res) {
    User.findOne({ _id: req.params.id })
      .select("-__v")
      .then((user) => {
        return !user
          ? res.status(404).json({ message: "user not found" })
          : res.json(user);
      })
      .catch((error) => res.status(500).json(error));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((error) => res.status(500).json(error));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) => {
        return !user
          ? res.status(404).json({ message: "user not found" })
          : res.json(user);
      })
      .catch((error) => res.status(500).json(error));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "user not found" })
          : Thought.deleteMany({ userId: req.params.id })
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "user and thought deleted" })
          : res.json({ message: "" })
      )
      .catch((error) => res.status(500).json(error));
  },
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User found with this ID!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User found with this ID!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};


// next steps: 
// create user api routes and test them 
// create thoughtcontroller 
// create thought api routes and test them
