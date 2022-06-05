import { updateUserById, getAllUsers,createUser,delIdUsers, getIdUsers, getUsername } from "../models/users.js";
import express from 'express';
import * as bcrypt from 'bcrypt';
import validator from 'validator';
import session from "express-session";


const userController = express.Router()


userController.get('/all',(req,res)=>{
    let limit = res.body
    getAllUsers()
    .then(([results])=>{
        res.status(200).json(results)
    
})




userController.post('/create',(req,res)=>{
    let user = req.body
    console.log(user)
    const rounds = 10

    if (!validator.isAlpha(user.firstname)){
        res.status(400).json({data: 'firstname is not valid'})
        return
    }
    if (!validator.isAlpha(user.lastname)){
        res.status(400).json({data: 'lastname is not valid'})
        return
    }

    bcrypt.hash(user.password, rounds, (err, hash) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(hash)
    var password = hash

    
    createUser(validator.escape(user.firstname),validator.escape(user.lastname),validator.escape(user.role),validator.escape(user.username),password)

    .then(([results]) => {
        console.log(results.username)
        res.status(200).json({data: `User created with ${results.insertId}`})
    })
        .catch(err => {
            res.status(500).json({data: "failed to create user"})
            console.log(err)
        })
    })

})
})

userController.get('/:id',(req,res)=>{
    let id = req.params.id
    getIdUsers(id)
    .then(([results])=>{
        res.status(200).json(results)
    })
    
})

//session user
userController.get('/status',(req,res)=>{
    let status = req.session.user
    console.log(status)
    .then(([results])=>{
        res.status(200).json(results)
    })
    
})


userController.delete('/:id',(req,res)=>{
    let id = req.params.id
    delIdUsers(id)
    .then(([results])=>{
        res.status(200).json(results)
    })
    
})

userController.post('/login',(req,res)=>{
    let user_details = req.body
    console.log(user_details)
    getUsername(user_details.username)
    .then(([results])=>{
        if(results.length > 0){
            let user = results[0]
            if(bcrypt.compareSync(user_details.password, user.password)){ 
                req.session.user = {
                    id: user.id,
                    role: user.role,
                }
                
                console.log(req.session.user)
                res.status(200).json("logged in")
                
            } else {
                res.status(401).json("wrong password")
            }

                
        } else {
            res.status(500).json("user not found")
        }

    })
})

userController.post('/logout',(req,res)=>{
    req.session.destroy()
    res.status(200).json("logged out")

})

userController.post('/update',(req,res)=>{
    let body = req.body
    let id = req.params.id
    console.log(body)
    console.log(id)
    updateUserById(body.id,body.firstname,body.lastname,body.role,body.username)
    .then(([results])=>{
        res.status(200).json(results)
    })
    
})


export default userController