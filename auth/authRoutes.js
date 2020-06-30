const User = require('./authController');

module.exports = (router) => {
    router.post('/register', User.createUser);
    router.post('/login', User.loginUser);
}