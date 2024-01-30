const express = require("express");
const mongoose = require("mongoose");
import dotenv from 'dotenv';
const cors = require("cors");
import todoRoutes from './routes/todoRoutes';
dotenv.config();

async function connect_db() {
    try{
        mongoose.connect(process.env.DB_CONN, {})
        .then(console.log("Connected :DDD"))
    } catch(error){
        console.log(error)
    }
}
connect_db();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use("api/todos", todoRoutes);

app.listen(port, () => {console.log(`Listening on port ${port}`)});