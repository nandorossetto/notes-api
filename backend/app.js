require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db/connection");
const routes = require("./routes/router");
connection();
app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.listen(3000, function(){
    console.log("Online");
});