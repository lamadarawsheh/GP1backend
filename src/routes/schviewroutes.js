const express= require('express');
const { default: mongoose } = require('mongoose');
const emp = require('../models/employee');
const build = require('../models/building');
const suntabel = require('../models/suntabel');
const montabel = require('../models/montabel');
const tuetabel = require('../models/tuetabel');
const wedtabel = require('../models/wedtabel');
const thurtabel = require('../models/thurtabel');
const router = express.Router();

const { request } = require('express');


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
const shift1Data = [];
const shift2Data = [];
const shift3Data = [];
const shift4Data = [];




router.post("/viewsunday",async(req,res)=>{
   
  const shiftss= await sunday.find();
  let shift1=[];
  let shift2=[];
  let shift3=[];
  let shift4=[];
  
  for(let i=0;i<shiftss.length;i++)
  {
    // console.log(shiftss[i].thiswavailable);
    
    // console.log(buildingname.name);
    const buildingname=await building.findOne({id:shiftss[i].shift1});
    shift1.push(buildingname.name);
    const buildingname2=await building.findOne({id:shiftss[i].shift2});
    shift2.push(buildingname2.name);
    const buildingname3=await building.findOne({id:shiftss[i].shift3});
    shift3.push(buildingname3.name);
    const buildingname4=await building.findOne({id:shiftss[i].shift4});
    shift4.push(buildingname4.name);

  }

  return res.json({shiftss,shift1,shift2,shift3,shift4});

});
router.post("/viewmonday",async(req,res)=>{
   
  const shiftss= await monday.find();
  let shift1=[];
  let shift2=[];
  let shift3=[];
  let shift4=[];
  
  for(let i=0;i<shiftss.length;i++)
  {
    // console.log(shiftss[i].thiswavailable);
    
    // console.log(buildingname.name);
    const buildingname=await building.findOne({id:shiftss[i].shift1});
    shift1.push(buildingname.name);
    const buildingname2=await building.findOne({id:shiftss[i].shift2});
    shift2.push(buildingname2.name);
    const buildingname3=await building.findOne({id:shiftss[i].shift3});
    shift3.push(buildingname3.name);
    const buildingname4=await building.findOne({id:shiftss[i].shift4});
    shift4.push(buildingname4.name);

  }

  return res.json({shiftss,shift1,shift2,shift3,shift4});

});

router.post("/viewtuesday",async(req,res)=>{
   
  const shiftss= await tuesday.find();
  let shift1=[];
  let shift2=[];
  let shift3=[];
  let shift4=[];
  
  for(let i=0;i<shiftss.length;i++)
  {
    // console.log(shiftss[i].thiswavailable);
    
    // console.log(buildingname.name);
    const buildingname=await building.findOne({id:shiftss[i].shift1});
    shift1.push(buildingname.name);
    const buildingname2=await building.findOne({id:shiftss[i].shift2});
    shift2.push(buildingname2.name);
    const buildingname3=await building.findOne({id:shiftss[i].shift3});
    shift3.push(buildingname3.name);
    const buildingname4=await building.findOne({id:shiftss[i].shift4});
    shift4.push(buildingname4.name);

  }

  return res.json({shiftss,shift1,shift2,shift3,shift4});

});
router.post("/viewwednesday",async(req,res)=>{
   
  const shiftss= await wednesday.find();
  let shift1=[];
  let shift2=[];
  let shift3=[];
  let shift4=[];
  
  for(let i=0;i<shiftss.length;i++)
  {
    // console.log(shiftss[i].thiswavailable);
    
    // console.log(buildingname.name);
    const buildingname=await building.findOne({id:shiftss[i].shift1});
    shift1.push(buildingname.name);
    const buildingname2=await building.findOne({id:shiftss[i].shift2});
    shift2.push(buildingname2.name);
    const buildingname3=await building.findOne({id:shiftss[i].shift3});
    shift3.push(buildingname3.name);
    const buildingname4=await building.findOne({id:shiftss[i].shift4});
    shift4.push(buildingname4.name);

  }

  return res.json({shiftss,shift1,shift2,shift3,shift4});

});
router.post("/viewthursday",async(req,res)=>{
   
  const shiftss= await thursday.find();
  let shift1=[];
  let shift2=[];
  let shift3=[];
  let shift4=[];
  
  for(let i=0;i<shiftss.length;i++)
  {
    // console.log(shiftss[i].thiswavailable);
    
    // console.log(buildingname.name);
    const buildingname=await building.findOne({id:shiftss[i].shift1});
    shift1.push(buildingname.name);
    const buildingname2=await building.findOne({id:shiftss[i].shift2});
    shift2.push(buildingname2.name);
    const buildingname3=await building.findOne({id:shiftss[i].shift3});
    shift3.push(buildingname3.name);
    const buildingname4=await building.findOne({id:shiftss[i].shift4});
    shift4.push(buildingname4.name);

  }

  return res.json({shiftss,shift1,shift2,shift3,shift4});

});



router.post("/scheduale",async(req,res)=>{
   
   const id =req.body.id
   const sharrsun=[];
   const sharrmon=[];
   const sharrtue=[];
   const sharrwed=[];
   const sharrthu=[];
  const shiftss= await sunday.findOne({ idnum: id });
 if(shiftss.thiswavailable=="true")
 {
  var buildinginf1=await building.findOne({id:shiftss.shift1});
  var buildinginf2=await building.findOne({id:shiftss.shift2});
  var buildinginf3=await building.findOne({id:shiftss.shift3});
  var buildinginf4=await building.findOne({id:shiftss.shift4});

  

   sharrsun[0]=buildinginf1.name;
   sharrsun[1]=buildinginf2.name;
   sharrsun[2]=buildinginf3.name;
   sharrsun[3]=buildinginf4.name;
 }
 else {
  sharrsun[0]="none";
  sharrsun[1]="none";
  sharrsun[2]="none";
  sharrsun[3]="none";

 }
 

 
   const  shiftsm= await monday.findOne({ idnum: id });
   if(shiftsm.thiswavailable=="true")
   {
    buildinginf1=await building.findOne({id:shiftsm.shift1});
    buildinginf2=await building.findOne({id:shiftsm.shift2});
    buildinginf3=await building.findOne({id:shiftsm.shift3});
    buildinginf4=await building.findOne({id:shiftsm.shift4});

    sharrmon[0]=buildinginf1.name;
    sharrmon[1]=buildinginf2.name;
    sharrmon[2]=buildinginf3.name;
    sharrmon[3]=buildinginf4.name;
 
   }
  
   else {
    sharrmon[0]="none";
    sharrmon[1]="none";
    sharrmon[2]="none";
    sharrmon[3]="none";
   }
 
     const shiftst= await tuesday.findOne({ idnum: id });
     if(shiftst.thiswavailable=="true")
{

  buildinginf1=await building.findOne({id:shiftst.shift1});
  buildinginf2=await building.findOne({id:shiftst.shift2});
  buildinginf3=await building.findOne({id:shiftst.shift3});
  buildinginf4=await building.findOne({id:shiftst.shift4});



 sharrtue[0]=buildinginf1.name;
 sharrtue[1]=buildinginf2.name;
 sharrtue[2]=buildinginf3.name;
 sharrtue[3]=buildinginf4.name;

}
else{

  sharrtue[0]="none";
  sharrtue[1]="none";
  sharrtue[2]="none";
  sharrtue[3]="none";


}
    

     const shiftsw= await wednesday.findOne({ idnum: id });
     if(shiftsw.thiswavailable=="true")
     {
      buildinginf1=await building.findOne({id:shiftsw.shift1});
      buildinginf2=await building.findOne({id:shiftsw.shift2});
      buildinginf3=await building.findOne({id:shiftsw.shift3});
      buildinginf4=await building.findOne({id:shiftsw.shift4});
 
 
      sharrwed[0]=buildinginf1.name;
      sharrwed[1]=buildinginf2.name;
      sharrwed[2]=buildinginf3.name;
      sharrwed[3]=buildinginf4.name;

     }
     else{

      sharrwed[0]="none";
      sharrwed[1]="none";
      sharrwed[2]="none";
      sharrwed[3]="none";

     }
    



     const  shiftsth= await thursday.findOne({ idnum: id });

     if(shiftsth.thiswavailable=="true")
     {
     buildinginf1=await building.findOne({id:shiftsth.shift1});
     buildinginf2=await building.findOne({id:shiftsth.shift2});
     buildinginf3=await building.findOne({id:shiftsth.shift3});
     buildinginf4=await building.findOne({id:shiftsth.shift4});

   
      sharrthu[0]=buildinginf1.name;
      sharrthu[1]=buildinginf2.name;
      sharrthu[2]=buildinginf3.name;
      sharrthu[3]=buildinginf4.name;
     }
     else{

      sharrthu[0]="none";
      sharrthu[1]="none";
      sharrthu[2]="none";
      sharrthu[3]="none";
     }

   console.log(sharrsun);
   console.log(sharrmon);
   console.log(sharrtue);
   console.log(sharrwed);
   console.log(sharrthu);




   return res.json({sharrsun,sharrmon,sharrtue,sharrwed,sharrthu});

});






module.exports=router;