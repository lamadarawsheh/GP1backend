const express= require('express');
const { default: mongoose } = require('mongoose');
const lost = require('../models/lostPackage');
const router = express.Router();

const lostp = mongoose.model("lostpakegeinfo");
const { request } = require('express');


router.post("/addpackage",async(req,res)=>{
    
    const {selected,disc,selectedImage} =req.body;
    console.log(req.body);

   try{

    await lostp.create({
        builidingname: selected,
        discreption:disc,
        imgname:selectedImage,
     
    });
    res.send({status:"ok"})

   }
   catch(error){
    res.send({status:"error"})
   }

});

router.post("/viewpackage",async(req,res)=>{
    
  

   try{

  const lostpackages=  await lostp.find();
    res.send({status:"ok",lostpackages})

   }
   catch(error){
    res.send({status:"error"})
   }

});

module.exports=router;