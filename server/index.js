const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/Users');

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
    
app.listen(3001, () => {
    console.log("SERVER RUNS GREAT!");
});