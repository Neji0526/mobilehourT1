import { createProductPurchase,updateProduct,getAllProductsSearch,getAllProductsPrice,getAllProductsAge,getAllProducts, getIdProducts,delIdProducts,createProduct } from "../models/products.js";
import express from 'express';
import validator from 'validator';

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
    createProduct(validator.escape(product.name),product.feature_id,validator.escape(product.price),validator.escape(product.colour),validator.escape(product.year),product.image,validator.escape(product.stock))
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
    updateProduct(validator.escape(product.product_name),validator.escape(product.feature_id),validator.escape(product.price),validator.escape(product.colour),validator.escape(product.year),validator.escape(product.image),validator.escape(product.soh),validator.escape(product.product_id))
    .then(([results])=>{
        res.status(200).json(results)
    }).catch((err)=>{
        console.log("error",err)
    }
    )
})

productController.post('/purchase',(req,res)=>{
    let product = req.body
    console.log(product)
    createProductPurchase(product.id,validator.escape(product.fname),validator.escape(product.lname),validator.escape(product.mobile),validator.escape(product.address1),validator.escape(product.address2))
    .then(([results])=>{
        res.status(200).json(results)
    }).catch((err)=>{
        console.log("error",err)
    }

    )
}
)



// createProductPurchase(id,fname,lname,mobile,address1,address2)

export default productController