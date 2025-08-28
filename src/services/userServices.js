//declare constants that have users 
const users = [
    { id: 1, name: 'Alice'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'Charlie'},
];

//logique metier pour chercher un utilisateur par son id
const findUserById = (id) => {
    return users.find(user => user.id === parseInt(id));
}
module.exports = { findUserById };