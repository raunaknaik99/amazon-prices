const {
    check,
    body
} = require('express-validator');

const User = require('../models/user');

//VVALIDATE POST LOGIN REQUEST
exports.validateLogin = [
    check('email', 'Please enter a valid email').isEmail(), body('password', 'Password length has to be more than 5').isLength({
        min: 6
    })
]

//VALIDATE POST REGISTER REQUEST
exports.validateRegister = [
    check('email').isEmail().withMessage('Please enter a valid email').normalizeEmail().custom((value, {
        req
    }) => {
        return User.findOne({
            email: value
        }).then(user => {
            if (user) return Promise.reject("An account with this email already exists");
        })
    }), body('username').notEmpty().custom((value, {
        req
    }) => {
        return User.findOne({
            username: value
        }).then(user => {
            if (user) return Promise.reject("An account with this username already exists");
        })
    }), body('password').isLength({
        min: 6
    }).withMessage('Password length has to be more than 5').custom((value, {
        req
    }) => {
        if (value !== req.body.confirmPassword) throw new Error("Passwords do not match");
        return true;
    })
]