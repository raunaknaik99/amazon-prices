require('dotenv').config()

const express = require("express"),
        cors = require("cors"),
        mongoose = require("mongoose");

const app = express();

app.use(express.static(__dirname + "/public/"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
        extended: true
}));

mongoose.connect(
        "mongodb+srv://JerryMouse:IVcz0Uk1KfRpKi4m@cluster0-j7grr.mongodb.net/test?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true
        }
).then(result => {
        console.log("Database is connected.");
});

const authRoutes = require("./routes/auth.js");
app.use("/accounts", authRoutes);
app.get("/.*/", (req, res) => {
        res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
        console.log("The server has started on port " + port)
});