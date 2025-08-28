const userService = require("../services/userServices");

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = userService.findUserById(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé" });
  }
};

module.exports = { getUserById };module.exports = { getUserById };




