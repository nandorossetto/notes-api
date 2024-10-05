const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const connection = require("./db/connection");
connection();
app.listen(3000, function(){
    console.log("Online");
});