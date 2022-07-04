// const express = require("express")
// const app = express();
// const port = process.env.port||3000
// app.get("/ping",(req,res)=>{
//     res.send("pong")
  
// })

// app.listen(port,()=> { console.log(`server is running on http://localhost:${port}`)})

/** middle ware */
// const express = require("express")
// const app = express();
// const port = process.env.port ||3000;

// const myLogger = function(req,res,next){
//     console.log("logger")
//     next();
// }



// const reqestTime = function(req,res,next){
//     req.reqTime = Date.now()
    
//     next();
// }


// app.use(myLogger)
// app.use(reqestTime)

// app.get("/",(req,res)=>{
//     res.send(`current time:${req.reqTime}`)
  
// })

// app.listen(port,()=> { console.log(`server is running on http://localhost:${port}`)})

/** static files */

// const express = require("express")
// const path = require("path")
// const app = express();
// const port = process.env.port ||3000;

// const publicpath = path.resolve(__dirname,'public')

// app.use(publicpath,express.static('static'))
//app.use(express.static("images"))
//app.use(express.static("files"))

//  <img src ="public/a.jpg"> </img>



//  app.get('/',function(req,res){
//     res.send(`staticfiles`)
  
// })

// app.listen(port,()=> { console.log(`server is running on http://localhost:${port}`)})



/** routing */
// const express = require("express")
// const app  = express();

// const PORT =3000;
// const data = {
//     id :1,
//     name:"india"
// }

// app.get('/',(req,res)=>{
//     res.end("welcome to my a homepage")
// })

// app.get('/about',(req,res)=>{
//     res.send("welcome to my  homepage")
// })
// app.get('/weather',(req,res)=>{
//     //res.send(data)
//     //res.json(data)
//     res.sendFile("/static/index.html")
// })


// app.listen(PORT,()=>{console.log("server is run on port",PORT)})



// /** session */

//  const express = require("express")
// const app = express();
// const cookies = require("cookie-parser")
// //const session = require("express-session")
// const PORT = process.env.PORT||3000;

// app.use(cookies());
//     let users =
//     {
//         name:"john",
//         age :"333"
// }


// app.get("/",(req,res)=>{
  
//      res.send("cookie set")
// })
// app.get("/setuser",(req,res)=>{
//     res.cookie("userdata",users)

//     res.send("userssddd")
// })
// app.get("/getuser",(req,res)=>{
//     res.send(req.cookies)
// })
// app.get("/logout",(req,res)=>{
//     res.clearCookie("userdata")
//     res.send("logout")
// })
// app.listen(PORT,()=>
// {console.log(`server is run on http://localhost:${PORT}`)
// })


