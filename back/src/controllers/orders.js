import {allOrders} from '../models/orders.js';
import express from 'express';



const ordersController = express.Router()

ordersController.get('/all',(req,res)=>{
    allOrders().catch(err=>{
        res.status(500).json({data: "failed to get all orders"})
    }
    ).then(([results])=>{
        res.status(200).json(results)
    }
    )
})



export default ordersController;

