require('dotenv').config()

const express = require("express"),
        cors = require("cors"),
        mongoose = require("mongoose"),
        path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
        extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(
        "mongodb+srv://JerryMouse:IVcz0Uk1KfRpKi4m@cluster0-j7grr.mongodb.net/test?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true
        }
).then(result => {
        console.log("Database is connected.");
});

const authRoutes = require("./routes/account");
const profileRoutes = require("./routes/profile");
app.use(authRoutes);
app.use(profileRoutes);

const port = process.env.PORT || 3000;

app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, (req, res) => {
        console.log("The server has started on port " + port)
});