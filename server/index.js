const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/Users');

app.use(express.json());

mongoose.connect(
    "mongodb+srv://saifh98:Emonh_123@saif.tfygyzr.mongodb.net/MERN-Project-1?retryWrites=true&w=majority"
    );

    app.get("/getUsers", (req, res) => {
UserModel.find({}, (err, result) => {
    if (err) {
        res.json(err);
    } else {
        res.json(result);
    }
});
    });

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001, () => {
    console.log("SERVER RUNS GREAT!");
});