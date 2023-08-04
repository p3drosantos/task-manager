const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();
const app = express();

connectToDatabase();

app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
});

app.listen(8000, () => console.log("Listening on port 8000!"));
