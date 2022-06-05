import { updateProduct,getAllProductsSearch,getAllProductsPrice,getAllProductsAge,getAllProducts, getIdProducts,delIdProducts,createProduct } from "../models/products.js";
import express from 'express';

const productController = express.Router()


productController.get('/all',(req,res)=>{
    getAllProducts()
    .then(([results])=>{
        res.status(200).json(results)
    })
    
})

//filters
//age 
productController.get('/age',(req,res)=>{
    getAllProductsAge()
    .then(([results])=>{
        res.status(200).json(results)
    })
    
})

//price
productController.get('/price',(req,res)=>{
    getAllProductsPrice()
    .then(([results])=>{
        res.status(200).json(results)
    })
    
})


//search feature
productController.post('/search',(req,res)=>{
    let products = req.body
    console.log(products)
    getAllProductsSearch(products.query)
    .then(([results])=>{
        res.status(200).json(results)
        console.log(results)
    })
    
})






productController.get('/:id',(req,res)=>{
    let id = req.params.id
    console.log(id)
    getIdProducts(id)
    .then(([results])=>{
        res.status(200).json(results)
    })
    
})

productController.delete('/:id',(req,res)=>{
    let id = req.params.id
    delIdProducts(id)
    .then(([results])=>{
        res.status(200).json(results)
    })
    
})


productController.post('/create',(req,res)=>{
    let product = req.body
    console.log(product)
    createProduct(product.name,product.feature_id,product.price,product.colour,product.year,product.image,product.stock)
    .then(([results])=>{
        res.status(200).json(results)
    }).catch((err)=>{
        console.log(err)
    }
    )
    
}
)
// createProduct(name,price,colour,year,image,stock)

productController.post('/update',(req,res)=>{
    let product = req.body
    console.log(product.id)
    updateProduct(product.product_name,product.feature_id,product.price,product.colour,product.year,product.image,product.soh,product.product_id)
    .then(([results])=>{
        res.status(200).json(results)
    }).catch((err)=>{
        console.log("error",err)
    }
    )
})






export default productController