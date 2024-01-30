import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';

dotenv.config()

async function connect_db() {
    try{
        await mongoose.connect(process.env.DB_CONN, {})
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