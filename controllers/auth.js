const {
    validationResult
} = require('express-validator');

const argon2 = require('argon2'),
    jwt = require("jsonwebtoken");

const User = require('../models/user');

//LOGIN CONTROLLER
exports.postLogin = (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    User.findOne({
        email
    }).then(async user => {
        if (!user) {
            return res.status(404).json({
                error: "User not found"
            })
        }
        try {
            if (await argon2.verify(user.password, password)) {
                const payload = {
                    _id: user.id,
                    email: user.email,
                    username: user.username
                }
                jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: 10
                }, (err, token) => {
                    return res.status(200).json({
                        success: true,
                        user,
                        msg: 'Login successfull',
                        token: `Bearer ${token}`
                    })
                });
            } else {
                return res.status(401).json({
                    error: "Password is incorrect"
                })
            }
        } catch (err) {
            res.status(500).json({
                error: err
            })
        }
    })
}

//REGISTER CONTROLLER
exports.postRegister = async (req, res, next) => {
    const {
        email,
        username,
        password,
        confirmPassword
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    let hash = undefined;
    try {
        hash = await argon2.hash(password);
    } catch (err) {
        return res.status(500).json({
            error: err
        })
    }
    let newUser = new User({
        email,
        username,
        password: hash
    });
    User.create(newUser, (err, user) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        } else {
            return res.status(200).json({
                success: true,
                msg: "Successfully signed up"
            });
        }
    })
}

//JWT AUTHENTICATION MIDDLEWARE
exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['Authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.status(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403);
        req.user = user;
        next();
    })
}