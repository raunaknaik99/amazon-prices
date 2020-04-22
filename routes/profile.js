const express = require("express"),
    router = express.Router();

//AUTHORIZATION CONTROLLER
const isAuthenticated = require("../middleware/is-auth")

//PROFILE CONTROLLER
const profileController = require("../controllers/profile")

router.get("/profile", isAuthenticated.authenticateToken, profileController.getProfile);

router.post("/profile/new", isAuthenticated.authenticateToken, profileController.postProfile);

module.exports = router;

//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTk5NzA2MGU4OGJiNDFmZDUxZWYxY2UiLCJlbWFpbCI6InJhdW5ha25haWs5OUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJvdG1hTjk5IiwiaWF0IjoxNTg3MzE2MDg3LCJleHAiOjE1ODczMTYwOTd9.tqQddvdNK6z8RFtBCnh8rewj-Y5TpQdphDpjXZAT608