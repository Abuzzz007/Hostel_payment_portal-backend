const mongoose = require("mongoose");

//const MONGOURI = "mongodb+srv://mariya:mariya117123@cluster0.glsg7.mongodb.net/students_list";
const MONGOURL = "mongodb+srv://hostelpaymentportal:hpp123@cluster0.glsg7.mongodb.net/students_list";

const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(MONGOURL, {
            useNewUrlParser: true
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;