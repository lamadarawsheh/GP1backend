const express= require('express');
const { default: mongoose } = require('mongoose');
const emp = require('../models/employee');
const build = require('../models/building');
const suntabel = require('../models/suntabel');
const montabel = require('../models/montabel');
const tuetabel = require('../models/tuetabel');
const wedtabel = require('../models/wedtabel');
const thurtabel = require('../models/thurtabel');
const shiftabstable=require('../models/shiftabsence');
const thiswabsencetable=require('../models/thisweekabsence');
const nextwabsencetable=require('../models/nextweekabsence');
const router = express.Router();

const { request } = require('express');
const nextwabsence = mongoose.model("nextweekabsencetable");
const thiswabsence = mongoose.model("thisweekabsencetable");
const shiftabsence = mongoose.model("shiftabsencetable");
const employee = mongoose.model("empinfo");
const building = mongoose.model("buildinginfo");
const sunday = mongoose.model("suntabel");
const monday = mongoose.model("montabel");
const tuesday = mongoose.model("tuetabel");
const wednesday = mongoose.model("wedtabel");
const thursday = mongoose.model("thurtabel");

//const arr = ['A','D', 'A', 'F','B','A','C','E','B'];
const arr=[];
//const b=['A','B','C','D','E','F'];
const n=[3,1,2,2,2,1,1];
let shift1Data = [];
let shift2Data = [];
let shift3Data = [];
let shift4Data = [];







router.post("/nextwabsence",async(req,res)=>{
   
    let {id,Sunday,Monday,Tuesday,Wednesday,Thursday} =req.body;
   
    console.log(req.body);
 
     await nextwabsence.create({
        idnum:id,
        sunday:Sunday,
        monday:Monday,
        tuesday:Tuesday,
        wednesday:Wednesday,
        thursday:Thursday,
       
    });
    res.send({status:"ok"})


});
// let sunstate;
// let monstate;
// let tuestate;
// let wedstate;
// let thurstate;
//when the admin accept the absence form 
router.post("/nextwabsenceaccept",async(req,res)=>{
   
    let {id,Sunday,Monday,Tuesday,Wednesday,Thursday} =req.body;
   
  
    if (Sunday=="true")
    {
        await sunday.updateOne(
            { idnum: id },
            { $set: { nextwavailable: 'false' } }
          );
    }
    if (Monday=="true")
    {
        await monday.updateOne(
            { idnum: id },
            { $set: { nextwavailable: 'false' } }
          );
    }
    if (Tuesday=="true")
    {
        await tuesday.updateOne(
            { idnum: id },
            { $set: { nextwavailable: 'false' } }
          );
    }
    if (Wednesday=="true")
    {
        await wednesday.updateOne(
            { idnum: id },
            { $set: { nextwavailable: 'false' } }
          );
    }
    if (Thursday=="true")
    {
        await thursday.updateOne(
            { idnum: id },
            { $set: { nextwavailable: 'false' } }
          );
    }


    console.log(req.body);
    res.send({status:"ok"})
    


});

//when the admin reject the absence form
router.post("/nextwabsencereject",async(req,res)=>{
   
    let {id,Sunday,Monday,Tuesday,Wednesday,Thursday} =req.body;
  
    console.log(req.body);
  
    await nextwabsence.deleteOne({ idnum: id });

    res.send({status:"ok"})


});
router.post("/viewnextwabsence",async(req,res)=>{
   
 

    try {
      const shift =await nextwabsence.find();
    
      console.log(shift);
      return res.json({shift});
      
  } catch (error) {
      console.error("something went wrong with /admin API: ", error)
  }
  
  });


module.exports=router;