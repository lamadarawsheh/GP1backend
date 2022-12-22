const express= require('express');
const { default: mongoose } = require('mongoose');
const build = require('../models/building');
const AA = require('../models/Alarm');
const router = express.Router();

const Alarm = mongoose.model("Alarmtabel");
const building = mongoose.model("buildinginfo");
const { request } = require('express');


router.post("/alarm",async(req,res)=>{
    const {selected,checked} =req.body;
    console.log(req.body);

   try{

   var buildingin =await building.findOne({name:selected});
   var id =buildingin.id;
   console.log(id);
    await Alarm.create({
        builidingname: selected,
        typeofAlarm:checked,
        id:id,
     
    });
    res.send({status:"ok"})

   }
   catch(error){
    res.send({status:"error"})
   }

});

module.exports=router;