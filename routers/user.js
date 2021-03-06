const router = require('express').Router();
const UserController = require('../controllers/user.js');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/google_login', UserController.googleLogin);

module.exports = router;