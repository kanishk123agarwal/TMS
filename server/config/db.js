const mongoose = require("mongoose");
const username=process.env.USERNAME;
const password=process.env.PASSWORD;
const db = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://"+
            username +
            ":" +
            password +
            "@cluster0.c3gy0no.mongodb.net/?retryWrites=true&w=majority"
            , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // await mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true});

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;