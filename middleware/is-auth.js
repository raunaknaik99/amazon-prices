const jwt = require("jsonwebtoken");

//JWT AUTHENTICATION MIDDLEWARE
exports.authenticateToken = (req, res, next) => {
    const authHeader = req.get('Authorization');
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
        return res.status(401).json({
            error: "No Authorization header",
            success: false
        });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({
            error: err,
            success: false
        });
        req.userId = user._id;
        next();
    })
}