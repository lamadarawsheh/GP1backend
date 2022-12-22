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
const router = express.Router();

const { request } = require('express');

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








router.post("/thiswabsence",async(req,res)=>{
   
    let {id,Sunday,Monday,Tuesday,Wednesday,Thursday} =req.body;
   
    console.log(req.body);
 
     await thiswabsence.create({
        idnum:id,
        sunday:Sunday,
        monday:Monday,
        tuesday:Tuesday,
        wednesday:Wednesday,
        thursday:Thursday,
       
    });
    res.send({status:"ok"})


});
let sunstate;
let monstate;
let tuestate;
let wedstate;
let thurstate;
//when the admin accept the absence form 
router.post("/thiswabsenceaccept",async(req,res)=>{
   
    let {id,Sunday,Monday,Tuesday,Wednesday,Thursday} =req.body;
    const arr=[];
        const b = await building.distinct('id');
        let sum=0;
        for (let i=0;i<n.length;i++)
         {
            sum=sum+n[i];
         }
         //console.log(sum);
        
        for (let i=0;i<n.length;i++)
        {
            for (let j=0;j<n[i];j++)
            {
                arr.push(b[i]);
                
            }
            
        }
        
        // for (let m=0;m<sum;m++)
        //       {
        //         console.log(arr[m]);
        
        //       }
        //      console.log("//////////");
        let currentIndex = arr.length,  randomIndex;
        
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
        
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
        
          // And swap it with the current element.
          [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
        }

        
        const numofemp = await employee.countDocuments();
        const lowsbuildings =await building.find({ levelofsec: 1 });
        const numoflsemp = await building.countDocuments({levelofsec: 1});
        console.log(`number of employees : ${numofemp}`);
        console.log(`number of emp : ${numoflsemp}`);
        for (let m=0;m<sum;m++)
              {
                console.log(arr[m]);
        
              }
             console.log("//////////");
if(Sunday=="true")
{
    const empid=await employee.distinct('id');
    const numofempins = await sunday.countDocuments({thiswavailable:'true'});
    if(numofempins>12)
    {
        sunstate=true;
       
        for(let i=0;i<numofempins;i++)
        {
           await sunday.deleteOne({idnum:empid[i]});
        }
       
      

        let  z=Math.floor(Math.random() * (11));
        console.log(arr.length);
        for (let i=0; i < arr.length; i++) {
            //console.log(array[i])
            shift1Data.push(arr[z]);
            
            if(z==(sum-1)){
                
                z=-1;
            }
            
            z++;
          }
      
          let  z0=Math.floor(Math.random() * ((numoflsemp)-1));
          console.log("z0"+z0);
          console.log((numofempins-1)-sum);
          console.log("start");
          for (let i=0; i < ((numofempins-1)-sum); i++) {
              //console.log(array[i])
              shift1Data.push(lowsbuildings[z0].id);
              // console.log(lowsbuildings.id[z0]);
              
              console.log(lowsbuildings[z0].id);
              if(z0==((numoflsemp)-1)){
                  
                  z0=-1;
              }
              
              z0++;
            }
      
      
      
          let  m=Math.floor(Math.random() * (11));
          for (let i=0; i < arr.length; i++) {
              //console.log(array[i])
              shift2Data.push(arr[m]);
            
              if(m==(sum-1)){
                  
                  m=-1;
              }
              
              m++;
            }
      
      
            let  m0=Math.floor(Math.random() * ((numoflsemp)-1));
            console.log("m0"+m0);
            console.log((numofempins-1)-sum);
            console.log("start");
            for (let i=0; i < ((numofempins-1)-sum); i++) {
                //console.log(array[i])
                shift2Data.push(lowsbuildings[m0].id);
                // console.log(lowsbuildings.id[z0]);
                
                console.log(lowsbuildings[m0].id);
                if(m0==((numoflsemp)-1)){
                    
                    m0=-1;
                }
                
                m0++;
              }
      
      
      
      
      
            let  g=Math.floor(Math.random() * (11));
            for (let i=0; i < arr.length; i++) {
                //console.log(array[i])
                shift3Data.push(arr[g]);
              
                if(g==(sum-1)){
                    
                    g=-1;
                }
                
                g++;
              }
      
      
              let  g0=Math.floor(Math.random() * ((numoflsemp)-1));
              console.log("g0"+g0);
              console.log((numofempins-1)-sum);
              console.log("start");
              for (let i=0; i < ((numofempins-1)-sum); i++) {
                  //console.log(array[i])
                  shift3Data.push(lowsbuildings[g0].id);
                  // console.log(lowsbuildings.id[z0]);
                  
                  console.log(lowsbuildings[g0].id);
                  if(g0==((numoflsemp)-1)){
                      
                      g0=-1;
                  }
                  
                  g0++;
                }
      
      
      
              let  l=Math.floor(Math.random() * (11));
              for (let i=0; i < arr.length; i++) {
                  //console.log(array[i])
                  shift4Data.push(arr[l]);
                
                  if(l==(sum-1)){
                      
                      l=-1;
                  }
                  
                  l++;
                }
      
      
                let  l0=Math.floor(Math.random() * ((numoflsemp)-1));
                console.log("l0"+l0);
                console.log((numofempins-1)-sum);
                console.log("start");
                for (let i=0; i < ((numofempins-1)-sum); i++) {
                    //console.log(array[i])
                    shift4Data.push(lowsbuildings[l0].id);
                    // console.log(lowsbuildings.id[z0]);
                    
                    console.log(lowsbuildings[l0].id);
                    if(l0==((numoflsemp)-1)){
                        
                        l0=-1;
                    }
                    
                    l0++;
                  }
      
      
      
      
      
      
      
          //       console.log('///////////////'); 
      
          // for (let m=0;m<numofemp;m++)
          // {
          //   console.log(shift1Data[m]);
      
          // }
      
          //         console.log('///////////////'); 
      
          //         for (let m=0;m<numofemp;m++)
          //         {
          //           console.log(shift2Data[m]);
            
          //         }
          //        console.log('///////////////'); 
      
          //        for (let m=0;m<numofemp;m++)
          //         {
          //           console.log(shift3Data[m]);
            
          //         }
          //        console.log('///////////////'); 
      
          //       for (let m=0;m<numofemp;m++)
          //       {
          //         console.log(shift4Data[m]);
          
          //       }
          //        console.log('///////////////'); 
          const eid= await employee.distinct('id');
        //   let idarr=[];
        //  for(let i=0;i<numofemp;i++)
        //  {
        //     if(eid[i]!=id)
        //     {
        //         idarr.push(eid[i]);
        //     }
        //  }
      for (let i=0;i<(numofempins);i++)
      {
        
        if(eid[i]==id){
            await sunday.create({
                shift1:"none",
                shift2:"none",
                shift3:"none",
                shift4:"none",
                thiswavailable:"false",
                nextwavailable:"true",
                idnum:eid[i]
            });
        }
        else {
            await sunday.create({
                shift1:shift1Data[i],
                shift2:shift2Data[i],
                shift3:shift3Data[i],
                shift4:shift4Data[i],
                thiswavailable:"true",
                nextwavailable:"true",
                idnum:eid[i]
            });

        }
        // console.log(eid[i]);

        

      
      
     
      
      }
      // arr=[];
      shift1Data = [];
      shift2Data = [];
      shift3Data = [];
      shift4Data = [];

  }
  else {
    sunstate=false;
  }

}
 if (Monday==true)
 {

    const empid=await employee.distinct('id');
    const numofempins = await monday.countDocuments({thiswavailable:'true'});
    if(numofempins>12)
    {
        monstate=true;
       
        for(let i=0;i<numofempins;i++)
        {
           await monday.deleteOne({idnum:empid[i]});
        }
       
      

        let  z=Math.floor(Math.random() * (11));
        console.log(arr.length);
        for (let i=0; i < arr.length; i++) {
            //console.log(array[i])
            shift1Data.push(arr[z]);
            
            if(z==(sum-1)){
                
                z=-1;
            }
            
            z++;
          }
      
          let  z0=Math.floor(Math.random() * ((numoflsemp)-1));
          console.log("z0"+z0);
          console.log((numofempins-1)-sum);
          console.log("start");
          for (let i=0; i < ((numofempins-1)-sum); i++) {
              //console.log(array[i])
              shift1Data.push(lowsbuildings[z0].id);
              // console.log(lowsbuildings.id[z0]);
              
              console.log(lowsbuildings[z0].id);
              if(z0==((numoflsemp)-1)){
                  
                  z0=-1;
              }
              
              z0++;
            }
      
      
      
          let  m=Math.floor(Math.random() * (11));
          for (let i=0; i < arr.length; i++) {
              //console.log(array[i])
              shift2Data.push(arr[m]);
            
              if(m==(sum-1)){
                  
                  m=-1;
              }
              
              m++;
            }
      
      
            let  m0=Math.floor(Math.random() * ((numoflsemp)-1));
            console.log("m0"+m0);
            console.log((numofempins-1)-sum);
            console.log("start");
            for (let i=0; i < ((numofempins-1)-sum); i++) {
                //console.log(array[i])
                shift2Data.push(lowsbuildings[m0].id);
                // console.log(lowsbuildings.id[z0]);
                
                console.log(lowsbuildings[m0].id);
                if(m0==((numoflsemp)-1)){
                    
                    m0=-1;
                }
                
                m0++;
              }
      
      
      
      
      
            let  g=Math.floor(Math.random() * (11));
            for (let i=0; i < arr.length; i++) {
                //console.log(array[i])
                shift3Data.push(arr[g]);
              
                if(g==(sum-1)){
                    
                    g=-1;
                }
                
                g++;
              }
      
      
              let  g0=Math.floor(Math.random() * ((numoflsemp)-1));
              console.log("g0"+g0);
              console.log((numofempins-1)-sum);
              console.log("start");
              for (let i=0; i < ((numofempins-1)-sum); i++) {
                  //console.log(array[i])
                  shift3Data.push(lowsbuildings[g0].id);
                  // console.log(lowsbuildings.id[z0]);
                  
                  console.log(lowsbuildings[g0].id);
                  if(g0==((numoflsemp)-1)){
                      
                      g0=-1;
                  }
                  
                  g0++;
                }
      
      
      
              let  l=Math.floor(Math.random() * (11));
              for (let i=0; i < arr.length; i++) {
                  //console.log(array[i])
                  shift4Data.push(arr[l]);
                
                  if(l==(sum-1)){
                      
                      l=-1;
                  }
                  
                  l++;
                }
      
      
                let  l0=Math.floor(Math.random() * ((numoflsemp)-1));
                console.log("l0"+l0);
                console.log((numofempins-1)-sum);
                console.log("start");
                for (let i=0; i < ((numofempins-1)-sum); i++) {
                    //console.log(array[i])
                    shift4Data.push(lowsbuildings[l0].id);
                    // console.log(lowsbuildings.id[z0]);
                    
                    console.log(lowsbuildings[l0].id);
                    if(l0==((numoflsemp)-1)){
                        
                        l0=-1;
                    }
                    
                    l0++;
                  }
      
      
      
      
      
      
      
          //       console.log('///////////////'); 
      
          // for (let m=0;m<numofemp;m++)
          // {
          //   console.log(shift1Data[m]);
      
          // }
      
          //         console.log('///////////////'); 
      
          //         for (let m=0;m<numofemp;m++)
          //         {
          //           console.log(shift2Data[m]);
            
          //         }
          //        console.log('///////////////'); 
      
          //        for (let m=0;m<numofemp;m++)
          //         {
          //           console.log(shift3Data[m]);
            
          //         }
          //        console.log('///////////////'); 
      
          //       for (let m=0;m<numofemp;m++)
          //       {
          //         console.log(shift4Data[m]);
          
          //       }
          //        console.log('///////////////'); 
          const eid= await employee.distinct('id');
        //   let idarr=[];
        //  for(let i=0;i<numofemp;i++)
        //  {
        //     if(eid[i]!=id)
        //     {
        //         idarr.push(eid[i]);
        //     }
        //  }
      for (let i=0;i<(numofempins);i++)
      {
        
        if(eid[i]==id){
            await monday.create({
                shift1:"none",
                shift2:"none",
                shift3:"none",
                shift4:"none",
                thiswavailable:"false",
                nextwavailable:"true",
                idnum:eid[i]
            });
        }
        else {
            await monday.create({
                shift1:shift1Data[i],
                shift2:shift2Data[i],
                shift3:shift3Data[i],
                shift4:shift4Data[i],
                thiswavailable:"true",
                nextwavailable:"true",
                idnum:eid[i]
            });

        }
        // console.log(eid[i]);

        

      
      
     
      
      }
      // arr=[];
      shift1Data = [];
      shift2Data = [];
      shift3Data = [];
      shift4Data = [];

  }
  else {
    monstate=false;
  }




 }
  if (Tuesday=="true")
  {

    const empid=await employee.distinct('id');
    const numofempins = await tuesday.countDocuments({thiswavailable:'true'});
    if(numofempins>12)
    {
        tuestate=true;
       
        for(let i=0;i<numofempins;i++)
        {
           await tuesday.deleteOne({idnum:empid[i]});
        }
       
      

        let  z=Math.floor(Math.random() * (11));
        console.log(arr.length);
        for (let i=0; i < arr.length; i++) {
            //console.log(array[i])
            shift1Data.push(arr[z]);
            
            if(z==(sum-1)){
                
                z=-1;
            }
            
            z++;
          }
      
          let  z0=Math.floor(Math.random() * ((numoflsemp)-1));
          console.log("z0"+z0);
          console.log((numofempins-1)-sum);
          console.log("start");
          for (let i=0; i < ((numofempins-1)-sum); i++) {
              //console.log(array[i])
              shift1Data.push(lowsbuildings[z0].id);
              // console.log(lowsbuildings.id[z0]);
              
              console.log(lowsbuildings[z0].id);
              if(z0==((numoflsemp)-1)){
                  
                  z0=-1;
              }
              
              z0++;
            }
      
      
      
          let  m=Math.floor(Math.random() * (11));
          for (let i=0; i < arr.length; i++) {
              //console.log(array[i])
              shift2Data.push(arr[m]);
            
              if(m==(sum-1)){
                  
                  m=-1;
              }
              
              m++;
            }
      
      
            let  m0=Math.floor(Math.random() * ((numoflsemp)-1));
            console.log("m0"+m0);
            console.log((numofempins-1)-sum);
            console.log("start");
            for (let i=0; i < ((numofempins-1)-sum); i++) {
                //console.log(array[i])
                shift2Data.push(lowsbuildings[m0].id);
                // console.log(lowsbuildings.id[z0]);
                
                console.log(lowsbuildings[m0].id);
                if(m0==((numoflsemp)-1)){
                    
                    m0=-1;
                }
                
                m0++;
              }
      
      
      
      
      
            let  g=Math.floor(Math.random() * (11));
            for (let i=0; i < arr.length; i++) {
                //console.log(array[i])
                shift3Data.push(arr[g]);
              
                if(g==(sum-1)){
                    
                    g=-1;
                }
                
                g++;
              }
      
      
              let  g0=Math.floor(Math.random() * ((numoflsemp)-1));
              console.log("g0"+g0);
              console.log((numofempins-1)-sum);
              console.log("start");
              for (let i=0; i < ((numofempins-1)-sum); i++) {
                  //console.log(array[i])
                  shift3Data.push(lowsbuildings[g0].id);
                  // console.log(lowsbuildings.id[z0]);
                  
                  console.log(lowsbuildings[g0].id);
                  if(g0==((numoflsemp)-1)){
                      
                      g0=-1;
                  }
                  
                  g0++;
                }
      
      
      
              let  l=Math.floor(Math.random() * (11));
              for (let i=0; i < arr.length; i++) {
                  //console.log(array[i])
                  shift4Data.push(arr[l]);
                
                  if(l==(sum-1)){
                      
                      l=-1;
                  }
                  
                  l++;
                }
      
      
                let  l0=Math.floor(Math.random() * ((numoflsemp)-1));
                console.log("l0"+l0);
                console.log((numofempins-1)-sum);
                console.log("start");
                for (let i=0; i < ((numofempins-1)-sum); i++) {
                    //console.log(array[i])
                    shift4Data.push(lowsbuildings[l0].id);
                    // console.log(lowsbuildings.id[z0]);
                    
                    console.log(lowsbuildings[l0].id);
                    if(l0==((numoflsemp)-1)){
                        
                        l0=-1;
                    }
                    
                    l0++;
                  }
      
      
      
      
      
      
      
          //       console.log('///////////////'); 
      
          // for (let m=0;m<numofemp;m++)
          // {
          //   console.log(shift1Data[m]);
      
          // }
      
          //         console.log('///////////////'); 
      
          //         for (let m=0;m<numofemp;m++)
          //         {
          //           console.log(shift2Data[m]);
            
          //         }
          //        console.log('///////////////'); 
      
          //        for (let m=0;m<numofemp;m++)
          //         {
          //           console.log(shift3Data[m]);
            
          //         }
          //        console.log('///////////////'); 
      
          //       for (let m=0;m<numofemp;m++)
          //       {
          //         console.log(shift4Data[m]);
          
          //       }
          //        console.log('///////////////'); 
          const eid= await employee.distinct('id');
        //   let idarr=[];
        //  for(let i=0;i<numofemp;i++)
        //  {
        //     if(eid[i]!=id)
        //     {
        //         idarr.push(eid[i]);
        //     }
        //  }
      for (let i=0;i<(numofempins);i++)
      {
        
        if(eid[i]==id){
            await tuesday.create({
                shift1:"none",
                shift2:"none",
                shift3:"none",
                shift4:"none",
                thiswavailable:"false",
                nextwavailable:"true",
                idnum:eid[i]
            });
        }
        else {
            await tuesday.create({
                shift1:shift1Data[i],
                shift2:shift2Data[i],
                shift3:shift3Data[i],
                shift4:shift4Data[i],
                thiswavailable:"true",
                nextwavailable:"true",
                idnum:eid[i]
            });

        }
        // console.log(eid[i]);

        

      
      
     
      
      }
      // arr=[];
      shift1Data = [];
      shift2Data = [];
      shift3Data = [];
      shift4Data = [];

  }
  else {
    tuestate=false;
  }




  }
if (Wednesday=="true")
{

    const empid=await employee.distinct('id');
    const numofempins = await wednesday.countDocuments({thiswavailable:'true'});
    if(numofempins>12)
    {
        wedstate=true;
       
        for(let i=0;i<numofempins;i++)
        {
           await wednesday.deleteOne({idnum:empid[i]});
        }
       
      

        let  z=Math.floor(Math.random() * (11));
        console.log(arr.length);
        for (let i=0; i < arr.length; i++) {
            //console.log(array[i])
            shift1Data.push(arr[z]);
            
            if(z==(sum-1)){
                
                z=-1;
            }
            
            z++;
          }
      
          let  z0=Math.floor(Math.random() * ((numoflsemp)-1));
          console.log("z0"+z0);
          console.log((numofempins-1)-sum);
          console.log("start");
          for (let i=0; i < ((numofempins-1)-sum); i++) {
              //console.log(array[i])
              shift1Data.push(lowsbuildings[z0].id);
              // console.log(lowsbuildings.id[z0]);
              
              console.log(lowsbuildings[z0].id);
              if(z0==((numoflsemp)-1)){
                  
                  z0=-1;
              }
              
              z0++;
            }
      
      
      
          let  m=Math.floor(Math.random() * (11));
          for (let i=0; i < arr.length; i++) {
              //console.log(array[i])
              shift2Data.push(arr[m]);
            
              if(m==(sum-1)){
                  
                  m=-1;
              }
              
              m++;
            }
      
      
            let  m0=Math.floor(Math.random() * ((numoflsemp)-1));
            console.log("m0"+m0);
            console.log((numofempins-1)-sum);
            console.log("start");
            for (let i=0; i < ((numofempins-1)-sum); i++) {
                //console.log(array[i])
                shift2Data.push(lowsbuildings[m0].id);
                // console.log(lowsbuildings.id[z0]);
                
                console.log(lowsbuildings[m0].id);
                if(m0==((numoflsemp)-1)){
                    
                    m0=-1;
                }
                
                m0++;
              }
      
      
      
      
      
            let  g=Math.floor(Math.random() * (11));
            for (let i=0; i < arr.length; i++) {
                //console.log(array[i])
                shift3Data.push(arr[g]);
              
                if(g==(sum-1)){
                    
                    g=-1;
                }
                
                g++;
              }
      
      
              let  g0=Math.floor(Math.random() * ((numoflsemp)-1));
              console.log("g0"+g0);
              console.log((numofempins-1)-sum);
              console.log("start");
              for (let i=0; i < ((numofempins-1)-sum); i++) {
                  //console.log(array[i])
                  shift3Data.push(lowsbuildings[g0].id);
                  // console.log(lowsbuildings.id[z0]);
                  
                  console.log(lowsbuildings[g0].id);
                  if(g0==((numoflsemp)-1)){
                      
                      g0=-1;
                  }
                  
                  g0++;
                }
      
      
      
              let  l=Math.floor(Math.random() * (11));
              for (let i=0; i < arr.length; i++) {
                  //console.log(array[i])
                  shift4Data.push(arr[l]);
                
                  if(l==(sum-1)){
                      
                      l=-1;
                  }
                  
                  l++;
                }
      
      
                let  l0=Math.floor(Math.random() * ((numoflsemp)-1));
                console.log("l0"+l0);
                console.log((numofempins-1)-sum);
                console.log("start");
                for (let i=0; i < ((numofempins-1)-sum); i++) {
                    //console.log(array[i])
                    shift4Data.push(lowsbuildings[l0].id);
                    // console.log(lowsbuildings.id[z0]);
                    
                    console.log(lowsbuildings[l0].id);
                    if(l0==((numoflsemp)-1)){
                        
                        l0=-1;
                    }
                    
                    l0++;
                  }
      
      
      
      
      
      
      
          //       console.log('///////////////'); 
      
          // for (let m=0;m<numofemp;m++)
          // {
          //   console.log(shift1Data[m]);
      
          // }
      
          //         console.log('///////////////'); 
      
          //         for (let m=0;m<numofemp;m++)
          //         {
          //           console.log(shift2Data[m]);
            
          //         }
          //        console.log('///////////////'); 
      
          //        for (let m=0;m<numofemp;m++)
          //         {
          //           console.log(shift3Data[m]);
            
          //         }
          //        console.log('///////////////'); 
      
          //       for (let m=0;m<numofemp;m++)
          //       {
          //         console.log(shift4Data[m]);
          
          //       }
          //        console.log('///////////////'); 
          const eid= await employee.distinct('id');
        //   let idarr=[];
        //  for(let i=0;i<numofemp;i++)
        //  {
        //     if(eid[i]!=id)
        //     {
        //         idarr.push(eid[i]);
        //     }
        //  }
      for (let i=0;i<(numofempins);i++)
      {
        
        if(eid[i]==id){
            await wednesday.create({
                shift1:"none",
                shift2:"none",
                shift3:"none",
                shift4:"none",
                thiswavailable:"false",
                nextwavailable:"true",
                idnum:eid[i]
            });
        }
        else {
            await wednesday.create({
                shift1:shift1Data[i],
                shift2:shift2Data[i],
                shift3:shift3Data[i],
                shift4:shift4Data[i],
                thiswavailable:"true",
                nextwavailable:"true",
                idnum:eid[i]
            });

        }
        // console.log(eid[i]);

        

      
      
     
      
      }
      // arr=[];
      shift1Data = [];
      shift2Data = [];
      shift3Data = [];
      shift4Data = [];

  }
  else {
    wedstate=false;
  }


}
if(Thursday=="true")
{

    const empid=await employee.distinct('id');
    const numofempins = await thursday.countDocuments({thiswavailable:'true'});
    if(numofempins>12)
    {
        thurstate=true;
       
        for(let i=0;i<numofempins;i++)
        {
           await thursday.deleteOne({idnum:empid[i]});
        }
       
      

        let  z=Math.floor(Math.random() * (11));
        console.log(arr.length);
        for (let i=0; i < arr.length; i++) {
            //console.log(array[i])
            shift1Data.push(arr[z]);
            
            if(z==(sum-1)){
                
                z=-1;
            }
            
            z++;
          }
      
          let  z0=Math.floor(Math.random() * ((numoflsemp)-1));
          console.log("z0"+z0);
          console.log((numofempins-1)-sum);
          console.log("start");
          for (let i=0; i < ((numofempins-1)-sum); i++) {
              //console.log(array[i])
              shift1Data.push(lowsbuildings[z0].id);
              // console.log(lowsbuildings.id[z0]);
              
              console.log(lowsbuildings[z0].id);
              if(z0==((numoflsemp)-1)){
                  
                  z0=-1;
              }
              
              z0++;
            }
      
      
      
          let  m=Math.floor(Math.random() * (11));
          for (let i=0; i < arr.length; i++) {
              //console.log(array[i])
              shift2Data.push(arr[m]);
            
              if(m==(sum-1)){
                  
                  m=-1;
              }
              
              m++;
            }
      
      
            let  m0=Math.floor(Math.random() * ((numoflsemp)-1));
            console.log("m0"+m0);
            console.log((numofempins-1)-sum);
            console.log("start");
            for (let i=0; i < ((numofempins-1)-sum); i++) {
                //console.log(array[i])
                shift2Data.push(lowsbuildings[m0].id);
                // console.log(lowsbuildings.id[z0]);
                
                console.log(lowsbuildings[m0].id);
                if(m0==((numoflsemp)-1)){
                    
                    m0=-1;
                }
                
                m0++;
              }
      
      
      
      
      
            let  g=Math.floor(Math.random() * (11));
            for (let i=0; i < arr.length; i++) {
                //console.log(array[i])
                shift3Data.push(arr[g]);
              
                if(g==(sum-1)){
                    
                    g=-1;
                }
                
                g++;
              }
      
      
              let  g0=Math.floor(Math.random() * ((numoflsemp)-1));
              console.log("g0"+g0);
              console.log((numofempins-1)-sum);
              console.log("start");
              for (let i=0; i < ((numofempins-1)-sum); i++) {
                  //console.log(array[i])
                  shift3Data.push(lowsbuildings[g0].id);
                  // console.log(lowsbuildings.id[z0]);
                  
                  console.log(lowsbuildings[g0].id);
                  if(g0==((numoflsemp)-1)){
                      
                      g0=-1;
                  }
                  
                  g0++;
                }
      
      
      
              let  l=Math.floor(Math.random() * (11));
              for (let i=0; i < arr.length; i++) {
                  //console.log(array[i])
                  shift4Data.push(arr[l]);
                
                  if(l==(sum-1)){
                      
                      l=-1;
                  }
                  
                  l++;
                }
      
      
                let  l0=Math.floor(Math.random() * ((numoflsemp)-1));
                console.log("l0"+l0);
                console.log((numofempins-1)-sum);
                console.log("start");
                for (let i=0; i < ((numofempins-1)-sum); i++) {
                    //console.log(array[i])
                    shift4Data.push(lowsbuildings[l0].id);
                    // console.log(lowsbuildings.id[z0]);
                    
                    console.log(lowsbuildings[l0].id);
                    if(l0==((numoflsemp)-1)){
                        
                        l0=-1;
                    }
                    
                    l0++;
                  }
      
      
      
      
      
      
      
          //       console.log('///////////////'); 
      
          // for (let m=0;m<numofemp;m++)
          // {
          //   console.log(shift1Data[m]);
      
          // }
      
          //         console.log('///////////////'); 
      
          //         for (let m=0;m<numofemp;m++)
          //         {
          //           console.log(shift2Data[m]);
            
          //         }
          //        console.log('///////////////'); 
      
          //        for (let m=0;m<numofemp;m++)
          //         {
          //           console.log(shift3Data[m]);
            
          //         }
          //        console.log('///////////////'); 
      
          //       for (let m=0;m<numofemp;m++)
          //       {
          //         console.log(shift4Data[m]);
          
          //       }
          //        console.log('///////////////'); 
          const eid= await employee.distinct('id');
        //   let idarr=[];
        //  for(let i=0;i<numofemp;i++)
        //  {
        //     if(eid[i]!=id)
        //     {
        //         idarr.push(eid[i]);
        //     }
        //  }
      for (let i=0;i<(numofempins);i++)
      {
        
        if(eid[i]==id){
            await thursday.create({
                shift1:"none",
                shift2:"none",
                shift3:"none",
                shift4:"none",
                thiswavailable:"false",
                nextwavailable:"true",
                idnum:eid[i]
            });
        }
        else {
            await thursday.create({
                shift1:shift1Data[i],
                shift2:shift2Data[i],
                shift3:shift3Data[i],
                shift4:shift4Data[i],
                thiswavailable:"true",
                nextwavailable:"true",
                idnum:eid[i]
            });

        }
        // console.log(eid[i]);

        

      
      
     
      
      }
      // arr=[];
      shift1Data = [];
      shift2Data = [];
      shift3Data = [];
      shift4Data = [];

  }
  else {
    thurstate=false;
  }


}



    console.log(req.body);
    res.send({status:"ok",sunstate,monstate,tuestate,wedstate,thurstate})
    


});

//when the admin reject the absence form
router.post("/thiswabsencereject",async(req,res)=>{
   
    let {id,Sunday,Monday,Tuesday,Wednesday,Thursday} =req.body;
  
    console.log(req.body);
  
    await thiswabsence.deleteOne({ idnum: id });

    res.send({status:"ok"})


});
router.post("/viewthiswabsence",async(req,res)=>{
   
 

  try {
    const shift =await thiswabsence.find();
  
    console.log(shift);
    return res.json({shift});
    
} catch (error) {
    console.error("something went wrong with /admin API: ", error)
}

});



module.exports=router;