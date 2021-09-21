//1. IMPORT DEPENDENCIES
const express = require('express');
const cors = require('cors');
const app = express(); //instantiate express server
const port = 8000; 

//1.5 CONFIGURE MONGOOSE (after testing)
require("./config/mongoose.config")

//2.  CONFIGURE EXPRESS SERVER
//cors- allows interaction req/res between react app & express app
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//3.  ATTACH ROUTES TO EXPRESS SERVER
const petRoutes = require('./routes/pet.routes')  
petRoutes(app) //change "product"

//4.  RUN EXPRESS SERVER
app.listen(port, () => console.log(`EXPRESS SERVER RUNNING ON PORT: ${port}`));
