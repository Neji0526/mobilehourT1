import { getAllGreetings } from "../models/greetings.js";
import express from 'express';

const greetingsController = express.Router()

greetingsController.get('/all',(req,res)=>{
    res.status(200).json(getAllGreetings())

})


export default greetingsController


