import express from "express"
import greetingsController from "./controllers/greetings.js"
import cors from 'cors'
import mysql from 'mysql'
import userController from "./controllers/users.js"
import productController from "./controllers/products.js"
import featuresController from "./controllers/features.js"
import session from "express-session"
import bodyParser from "body-parser"



const app = express()
const corsOptions = {
    origin: '*',  //Your Client, do not write '*'
    credentials: true,
};
app.use(cors(corsOptions));

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { request } from "http"

const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(bodyParser.json())

//Enable session middleware, This gives server sesstion object
app.use(session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false
    }
}))

const port = 8000

//custom access controll middleware
app.use((req, res, next) => {
  const routes = {
      'unauthorised': [
          "/style.css",
        //   Delete this to allow all routes 3
          "/api/users/login",
          "/api/products",
          "/api/products/all",
          "/api/users/all", 
          "/api/users/create", 
          "/api/features",
          "/api/users", 
          "/login",
          "/images"

      ],
      'admin':[
          "/style.css",
          "/logout",
          "/create_users",
          "/list_users",
          "/edit_users",
          "/delete_users",
          "/api/users",

      ],
      'employee':[
          "/style.css",
          "/api/users/logout",
          "/logout",
      ]
  } 
  //establish the role of current user
  //if user is not logged in, redirect to login page
  let user_role = "unauthorised"
  if (req.session.user) {
        user_role = req.session.user.role
  }
  console.log(req.session.user)
  console.log(req.originalUrl)
  if (user_role in routes){
        let allowed_routes = routes[user_role]
        if (allowed_routes.some(url => req.originalUrl.startsWith(url))){
            next()
        } else {
            res.status(401).json("unauthorised")
        }
    } else { 
        res.status(401).json("unauthorised")
    }

})




app.use(express.json())

app.use(express.static('views'))
app.use(express.static('static'))


app.use('/api/greetings', greetingsController)
app.use('/api/users', userController)
app.use('/api/products', productController)
app.use('/api/features', featuresController)




app.listen(port, () => console.log(`server running on port: http://localhost:${port}`))
