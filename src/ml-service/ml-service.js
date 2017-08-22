const express = require('express');

// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
var apiRoutes = express.Router();

export default function auth({
	app
}) {

  apiRoutes.post('/train',(req,res)=>{
    
  })

  apiRoutes.post('/test',(req,res)=>{

  })

  apiRoutes.get('/ping',(req,res)=>{
    res.send("PING!!!");
  })

	return apiRoutes;
}
