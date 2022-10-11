const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://saifh98:Emonh_123@saif.tfygyzr.mongodb.net/MERN-Project-1?retryWrites=true&w=majority"
    );

app.listen(3001, () => {
    console.log("SERVER RUNS GREAT!");
});