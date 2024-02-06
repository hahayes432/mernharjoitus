import express from 'express';
import mongoose from 'mongoose';

const r = express.Router();

r.get("/", (req,res) => {
    const viästi = "juupajuu etsts"
    res.send(viästi);
})


export default r;