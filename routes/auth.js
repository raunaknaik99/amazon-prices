const express = require("express"),
        router = express.Router();

//AUTHORIZATION CONTROLLER
const authController = require("../controllers/auth")

//Validation middleware
const authValidation = require("../middleware/auth-validation")

//POST LOGIN
router.post("/login", authValidation.validateLogin, authController.postLogin);

//POST REGISTER
router.post("/register", authValidation.validateRegister, authController.postRegister);

module.exports = router;