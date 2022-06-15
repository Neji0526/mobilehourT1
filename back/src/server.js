import express from "express"
import greetingsController from "./controllers/greetings.js"
import cors from 'cors'
import userController from "./controllers/users.js"
import productController from "./controllers/products.js"
import featuresController from "./controllers/features.js"
import session from "express-session"
import proxy from "express-http-proxy"
import ordersController from "./controllers/orders.js"



const app = express()

// const corsOptions = {
//     origin: 'http://localhost:8000',  //Your Client, do not write '*'
// };
// app.use(cors(corsOptions));

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { request } from "http"

const __dirname = dirname(fileURLToPath(import.meta.url));

// let allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Headers', "*");
//   res.header('Access-Control-Allow-Methods', "*");
//   res.header('Access-Control-Allow-Credentials', "true");
//   res.header('access-control-expose-headers', 'Set-Cookie')
//   next();
// }
// app.use(allowCrossDomain);
app.use('/frontend', proxy('http://localhost:5501'));


//Enable session middleware, This gives server sesstion object
app.use(express.json())
app.use(session({
    secret: 'keyboardsadasdcat',
    resave: false,
    path: '/',
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
          "/api/users/session/status",
          "/api/users/login",
          "/api/products",
          "/api/products/all",
          "/api/users/all", 
          "/api/features",
          "/api/users", 
          "/frontend/login.html",
          "/frontend/index.html",
          "/api/products/purchase",
          "frontend/purchaseproduct.html",
        //   ^^ delete this

      ],
      'admin':[
          "/frontend/",
          "/api/users/session/status",
          "/style.css",
          "/logout",
          "/create_users",
          "/list_users",
          "/edit_users",
          "/delete_users",
          "/api/users",
          "/api/users/create", 
          "/frontend/",
          "/style.css",
          "/api/users/session/status",
        //   Delete this to allow all routes 3
          "/api/users/login",
          "/api/products",
          "/api/products/all",
          "/api/users/all", 
          "/api/features",
          "/api/users", 
          "/frontend/login",
          "/frontend/images",
          "/frontend/index.html",
          "/api/orders/all", 




      ],
      'employee':[
        "/frontend/",
        "/api/users/session/status",
          "/style.css",
          "/api/users/logout",
          "/logout",
          "/api/orders/all", 

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





app.use(express.static('views'))
app.use(express.static('static'))


app.use('/api/greetings', greetingsController)
app.use('/api/users', userController)
app.use('/api/products', productController)
app.use('/api/features', featuresController)
app.use('/api/orders', ordersController)





app.listen(port, () => console.log(`server running on port: http://localhost:${port}`))
