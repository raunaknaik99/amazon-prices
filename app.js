const express = require("express"),
        cors = require("cors"),
        mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public"))
mongoose.connect(
        "mongodb+srv://JerryMouse:IVcz0Uk1KfRpKi4m@cluster0-j7grr.mongodb.net/test?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true
        }
).then(result => {
        console.log("Database is connected.");
});

app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + "/public/index.html");
})

const authRoutes = require("./routes/users.js");

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
        console.log("The server has started on port " + port);
});