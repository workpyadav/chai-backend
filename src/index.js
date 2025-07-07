// require('dotenv').config({path: './env'})
import express from "express";
import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
    path: "./.env"
})

const app = express();

connectDB()
.then(() => {
    app.listen(process.env || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})





/*
import express from "express"
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERRR:", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
})()

*/