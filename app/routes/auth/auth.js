const express = require('express');
const router = express.Router();
// const authController = require('../../controllers/authController');
const jwt      = require('jsonwebtoken');
const passport = require('passport');
// const model = require('./../models');
router.post('/login', function (req, res, next) {

    passport.authenticate('local', {session: false}, (err, user, info) => {
        
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }

        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }

            const token = jwt.sign(user, 'your_jwt_secret');
            res.cookie('jwt',token);
            return res.json({user, token});
            // Respone http://localhost:3000/auth/login?email=nguyenvana@gmail.com&password=123456
        });
    })
    (req, res);

});


module.exports = router
