const users = require("../users");

const getUsers = (req, res) => {
  if (req.query.first_name) {
    const filteredUsers = users.filter(
      user => user.first_name === req.query.first_name
    );
    res.json(filteredUsers);
  } else {
    res.json(users);
    // res.status(406).json("You must provide a first_name");
  }
};

const getUser = (req, res) => {
  const user = users.find((user, index) => user.id === +req.params.id);
  res.json(user);
};

module.exports = {
  getUsers,
  getUser
};
