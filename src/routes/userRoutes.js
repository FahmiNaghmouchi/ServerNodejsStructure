const express = require('express');
const router = express.Router();
//const { getAllUsers} = require('../controllers/userController');
const { getUserById} = require('../controllers/userController');


//const authMiddleware = require('../middlewares/auth');

//router.get('/', authMiddleware, getAllUsers);
router.get('/:id' ,getUserById);

// Routes utilisateur
module.exports = router;