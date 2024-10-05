const mongoose = require("mongoose");
async function main() {
    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            "mongodb+srv://nandorossetto:tzhoki46@cluster0.hk758.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("DB Connected");
    }catch(error){
        console.log(error);
    }
}
module.exports = main