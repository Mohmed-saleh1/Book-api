 const express = require('express');
 const cors = require('cors');
 const bodyParser = require('body-parser');
 const noteRouter = require('./routes/store.route')
 const app = express();

 app.use(cors());

 // parse application/x-www-form-rulencoded
 app.use(bodyParser.urlencoded({extends:false}));

 //parse application JSON 

 app.use(bodyParser.json())

 app.get('/',(req,res)=>{
    res.send("Server Started .......")
 });

 app.use('/api/vi',noteRouter);

 app.listen(3000,()=>{
    console.log("Server start .......");
 })
