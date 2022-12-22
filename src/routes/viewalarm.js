const express= require('express');
const { default: mongoose } = require('mongoose');
const emp = require('../models/employee');
const build = require('../models/building');
const suntabel = require('../models/suntabel');
const montabel = require('../models/montabel');
const tuetabel = require('../models/tuetabel');
const wedtabel = require('../models/wedtabel');
const thurtabel = require('../models/thurtabel');
const alarmt =require('../models/Alarm');
const router = express.Router();

const { request } = require('express');

const alarm = mongoose.model("Alarmtabel");
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



// router.post("/signup",async(req,res)=>{
//     const {username,email,phoneNumber,passworad,passworadRepeat} =req.body;
//     console.log(req.body);
//    const encryptedPassword = await bcrypt.hash(passworad,10);
//    console.log(encryptedPassword);
//    try{
// //    const oldemp = await employee.findOne({email});
// //     if(oldemp){
// //        res.send({error:"Employee Exists"});
// //     }

//     await employee.create({
//         name: username,
//         email:email,
//         phoneNumber:phoneNumber,
//         password:encryptedPassword,
//         reppassword:passworadRepeat,
//     });
//     res.send({status:"ok"})

//    }
//    catch(error){
//     res.send({status:"error"})
//    }

// });


let Aname="";
let Aalarmtybe=[];
let Bname="";
let Balarmtybe=[];
let Cname="";
let Calarmtybe=[];
let Dname="";
let Dalarmtybe=[];
let Ename="";
let Ealarmtybe=[];
let Fname="";
let Falarmtybe=[];
let Gname="";
let Galarmtybe=[];

let Aalarmtybee=[];

let Balarmtybee=[];

let Calarmtybee=[];

let Dalarmtybee=[];

let Ealarmtybee=[];

let Falarmtybee=[];

let Galarmtybee=[];



router.post("/viewalarm",async(req,res)=>{
   
  //  const id =req.body.id

   //const time=[];
  const alarmb = await alarm.distinct('id');
  for (let i=0;i<alarmb.length;i++){
    const D=await alarm.find({ id: alarmb[i] });
    
    for (let j=0;j<D.length;j++)
    {
if (alarmb[i]=='A')
{
Aname=D[j].builidingname;
Aalarmtybee.push(D[j].typeofAlarm);

}
else if (alarmb[i]=='B')
{
Bname=D[j].builidingname;
Balarmtybee.push(D[j].typeofAlarm);

}
else if (alarmb[i]=='C')
{
Cname=D[j].builidingname;
Calarmtybee.push(D[j].typeofAlarm);

}
else if (alarmb[i]=='D')
{
Dname=D[j].builidingname;
Dalarmtybee.push(D[j].typeofAlarm);

}
else if (alarmb[i]=='E')
{
Ename=D[j].builidingname;
Ealarmtybee.push(D[j].typeofAlarm);

}
else if (alarmb[i]=='F')
{
Fname=D[j].builidingname;
Falarmtybee.push(D[j].typeofAlarm);

}
else if (alarmb[i]=='G')
{
Gname=D[j].builidingname;
Galarmtybee.push(D[j].typeofAlarm);

}



      // console.log(D[j].builidingname);
      // console.log(D[j].typeofAlarm);
    }
    

  }


  // const shiftss= await sunday.findOne({ idnum: id });
  // var buildinginf1=await building.findOne({id:shiftss.shift1});
  // var buildinginf2=await building.findOne({id:shiftss.shift2});
  // var buildinginf3=await building.findOne({id:shiftss.shift3});
  // var buildinginf4=await building.findOne({id:shiftss.shift4});
  // // console.log(buildinginf0.name);
  
  // const sharrsun=[];
  //  sharrsun[0]=buildinginf1.name;
  //  sharrsun[1]=buildinginf2.name;
  //  sharrsun[2]=buildinginf3.name;
  //  sharrsun[3]=buildinginf4.name;
 
  //  const  shiftsm= await monday.findOne({ idnum: id });
  //   buildinginf1=await building.findOne({id:shiftsm.shift1});
  //   buildinginf2=await building.findOne({id:shiftsm.shift2});
  //   buildinginf3=await building.findOne({id:shiftsm.shift3});
  //   buildinginf4=await building.findOne({id:shiftsm.shift4});


  //  const sharrmon=[];
  //  sharrmon[0]=buildinginf1.name;
  //  sharrmon[1]=buildinginf2.name;
  //  sharrmon[2]=buildinginf3.name;
  //  sharrmon[3]=buildinginf4.name;

  //    const shiftst= await tuesday.findOne({ idnum: id });
  //    buildinginf1=await building.findOne({id:shiftst.shift1});
  //    buildinginf2=await building.findOne({id:shiftst.shift2});
  //    buildinginf3=await building.findOne({id:shiftst.shift3});
  //    buildinginf4=await building.findOne({id:shiftst.shift4});


  //   const sharrtue=[];
  //   sharrtue[0]=buildinginf1.name;
  //   sharrtue[1]=buildinginf2.name;
  //   sharrtue[2]=buildinginf3.name;
  //   sharrtue[3]=buildinginf4.name;


  //    const shiftsw= await wednesday.findOne({ idnum: id });
  //    buildinginf1=await building.findOne({id:shiftsw.shift1});
  //    buildinginf2=await building.findOne({id:shiftsw.shift2});
  //    buildinginf3=await building.findOne({id:shiftsw.shift3});
  //    buildinginf4=await building.findOne({id:shiftsw.shift4});

  //    const sharrwed=[];
  //    sharrwed[0]=buildinginf1.name;
  //    sharrwed[1]=buildinginf2.name;
  //    sharrwed[2]=buildinginf3.name;
  //    sharrwed[3]=buildinginf4.name;



  //    const  shiftsth= await thursday.findOne({ idnum: id });
  //    buildinginf1=await building.findOne({id:shiftsth.shift1});
  //    buildinginf2=await building.findOne({id:shiftsth.shift2});
  //    buildinginf3=await building.findOne({id:shiftsth.shift3});
  //    buildinginf4=await building.findOne({id:shiftsth.shift4});

  //     const sharrthu=[];
  //     sharrthu[0]=buildinginf1.name;
  //     sharrthu[1]=buildinginf2.name;
  //     sharrthu[2]=buildinginf3.name;
  //     sharrthu[3]=buildinginf4.name;


  //  console.log(sharrsun);
  //  console.log(sharrmon);
  //  console.log(sharrtue);
  //  console.log(sharrwed);
  //  console.log(sharrthu);


//
  Aalarmtybe=Aalarmtybee;

  Balarmtybe=Balarmtybee;
 
  Calarmtybe=Calarmtybee;
 
  Dalarmtybe=Dalarmtybee;
 
  Ealarmtybe=Ealarmtybee;
 
  Falarmtybe=Falarmtybee;
 
  Galarmtybe=Galarmtybee;
  
  Aalarmtybee=[];

  Balarmtybee=[];
 
  Calarmtybee=[];
 
  Dalarmtybee=[];
 
  Ealarmtybee=[];
 
  Falarmtybee=[];
 
  Galarmtybee=[];


   return res.json({alarmb,Aname,Aalarmtybe,Bname,Balarmtybe,Cname,Calarmtybe,Dname,Dalarmtybe,Ename,Ealarmtybe,Fname,Falarmtybe,Gname,Galarmtybe});
  // console.log(emp.password);
//    if(!emp){
//     return res.json({error:"Employee Not found "});
// }

//if(await bcrypt.compare(passworad,emp.password)){
  //  const token = jwt.sign({name:emp.name},JWT_SECRET);

//     if(res.status(201)){
//         console.log(emp.name);
//         return res.json({status:"ok",data:emp.name});
//     }
//     else{
//         return res.json({error:"error"});
//     }
// //}
// return res.json({status:"error",error:"invalid password"});

});







module.exports=router;