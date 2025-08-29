const userService = require("../services/userServices");
const User = require('../models/userModel');

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = userService.findUserById(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé" });
  }
};

async function createUser() {
 try {
 const newUser = new User({
 username: 'Alice',
 email: 'alice@example.com',
 password: 'securepassword',
 });
 const savedUser = await newUser.save();
 console.log('Utilisateur créé :', savedUser);
 } catch (error) {
 console.error('Erreur lors de la création de l\'utilisateur :',
error);
 }
}
//createUser();

async function getUsers() {
 try {
 const users = await User.find();
 console.log('Liste des utilisateurs :', users);
 } catch (error) {
 console.error('Erreur lors de la récupération des utilisateurs :',
error);
 }
}
getUsers();

async function deleteUser(id) {
 try {
 const deletedUser = await User.findByIdAndDelete(id);
 console.log('Utilisateur supprimé :', deletedUser);
 } catch (error) {
 console.error('Erreur lors de la suppression de l\'utilisateur :',
error);
 }
}
deleteUser('68b17cf11335c0812d72e998');

module.exports = { getUserById };module.exports = { getUserById };




