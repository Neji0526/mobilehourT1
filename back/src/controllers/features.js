import { getAllFeatures,createFeature,deleteFeature, getFeatureById, updateFeature } from "../models/features.js";
import express from 'express';

const featuresController = express.Router()


featuresController.get('/all',(req,res)=>{
    getAllFeatures()
    .then(([results])=>{
        res.status(200).json(results)
    })})
    
featuresController.post('/create',(req,res)=>{
    createFeature(req.body.length,req.body.width,req.body.weight,req.body.charge,req.body.warranty,req.body.cpu,req.body.cameraspecs)
    .then(([results])=>{
        res.status(200).json(results)
    })
})

featuresController.delete('/delete/:id',(req,res)=>{
    deleteFeature(req.params.id)
    .then(([results])=>{
        res.status(200).json(results)
    })
}
)

featuresController.get('/:id',(req,res)=>{
    getFeatureById(req.params.id)
    .then(([results])=>{
        res.status(200).json(results)
    })
}
)


featuresController.post('/update/:id',(req,res)=>{
    updateFeature(req.body.feature_id,req.body.length,req.body.width,req.body.weight,req.body.charge,req.body.warranty,req.body.cpu,req.body.cameraspecs)
    .then(([results])=>{
        res.status(200).json(results)
    })
}
)




export default featuresController