const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const connection = require("./db/connection");
connection();
const routes = require("./routes/router");
app.use("/api", routes);
app.listen(3000, function(){
    console.log("Online");
});