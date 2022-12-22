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
const router = express.Router();

const { request } = require('express');

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
const shift1Data = [];
const shift2Data = [];
const shift3Data = [];
const shift4Data = [];









router.post("/shiftabsence",async(req,res)=>{
   
    let {id,shiftnum,day} =req.body;
    let buildingname;
    if(day==0)
    {
        day="sunday";
        // console.log(shiftnum);
        const shiftss= await sunday.findOne({ idnum: id });
        if (shiftnum=="8-10 PM")
{
    var buildinginfo=await building.findOne({id:shiftss.shift1});
    buildingname=buildinginfo.name;
    
}
else if (shiftnum=="10-12 PM")
{
    var buildinginfo=await building.findOne({id:shiftss.shift2});
    buildingname=buildinginfo.name;
}
else if (shiftnum=="12-2 PM")
{
    var buildinginfo=await building.findOne({id:shiftss.shift3});
    buildingname=buildinginfo.name;
}
else if (shiftnum=="2-4 PM")
{
    var buildinginfo=await building.findOne({id:shiftss.shift4});
    buildingname=buildinginfo.name;
}
  
 
    }
    else  if(day==1)
    {
        day="monday";
        const shiftss= await monday.findOne({ idnum: id });
        if (shiftnum=="8-10 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift1});
            buildingname=buildinginfo.name;
            
        }
        else if (shiftnum=="10-12 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift2});
            buildingname=buildinginfo.name;
        }
        else if (shiftnum=="12-2 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift3});
            buildingname=buildinginfo.name;
        }
        else if (shiftnum=="2-4 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift4});
            buildingname=buildinginfo.name;
        }
    }
    else  if(day==2)
    {
        day="tuesday";
        const shiftss= await tuesday.findOne({ idnum: id });
        if (shiftnum=="8-10 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift1});
            buildingname=buildinginfo.name;
            
        }
        else if (shiftnum=="10-12 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift2});
            buildingname=buildinginfo.name;
        }
        else if (shiftnum=="12-2 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift3});
            buildingname=buildinginfo.name;
        }
        else if (shiftnum=="2-4 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift4});
            buildingname=buildinginfo.name;
        }
    }
    else  if(day==3)
    {
        day="wednesday";
        const shiftss= await wednesday.findOne({ idnum: id });
        if (shiftnum=="8-10 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift1});
            buildingname=buildinginfo.name;
            
        }
        else if (shiftnum=="10-12 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift2});
            buildingname=buildinginfo.name;
        }
        else if (shiftnum=="12-2 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift3});
            buildingname=buildinginfo.name;
        }
        else if (shiftnum=="2-4 PM")
        {
            var buildinginfo=await building.findOne({id:shiftss.shift4});
            buildingname=buildinginfo.name;
        }
    }
    else  if(day==4)
    {
        day="thursday";
        const shiftss= await thursday.findOne({ idnum: id });
        if (shiftnum=="8-10 PM")
{
    var buildinginfo=await building.findOne({id:shiftss.shift1});
    buildingname=buildinginfo.name;
    
}
else if (shiftnum=="10-12 PM")
{
    var buildinginfo=await building.findOne({id:shiftss.shift2});
    buildingname=buildinginfo.name;
}
else if (shiftnum=="12-2 PM")
{
    var buildinginfo=await building.findOne({id:shiftss.shift3});
    buildingname=buildinginfo.name;
}
else if (shiftnum=="2-4 PM")
{
    var buildinginfo=await building.findOne({id:shiftss.shift4});
    buildingname=buildinginfo.name;
}
    }
    console.log(req.body);
 
     await shiftabsence.create({
        idnum: id,
        day:day,
        shiftnum:shiftnum,
        buildingname:buildingname,
       
    });
    res.send({status:"ok"})


});
let state;
//when the admin accept the absence form 
router.post("/shiftabsenceaccept",async(req,res)=>{
   
    let {id,shiftnum,day,buildingname} =req.body;
    if(day=="sunday")
    {
        // const shiftss= await sunday.findOne({ idnum: id });
        
     
          if (shiftnum=="8-10 PM")
          {
            await sunday.updateOne(
                { idnum: id },
                { $set: { shift1: 'none' } }
              );
            const lowsbuildings =await building.find({ levelofsec: 1 });
            const numoflsemp = await building.countDocuments({levelofsec: 1});
            const name =await building.findOne({ name: buildingname });
            console.log(name.id);
            let substitute;
            for(let i=0;i<numoflsemp;i++)
            {
                const shiftss= await sunday.countDocuments({ shift1:lowsbuildings[i].id });
                if (shiftss>1)
                {
                    substitute =await sunday.find({shift1:lowsbuildings[i].id});
                    
                }
               
                console.log(lowsbuildings[i].id);
                console.log(shiftss);
            }
            if(substitute!=null)
            {
                console.log(substitute[0].idnum);
                await sunday.updateOne(
                    { idnum: substitute[0].idnum },
                    { $set: { shift1: name.id } }
                  );
           state=true;
                }
          else {
            state=false;
          }
             
              
          }
          else if (shiftnum=="10-12 PM")
          {
            await sunday.updateOne(
                { idnum: id },
                { $set: { shift2: 'none' } }
              );
            const lowsbuildings =await building.find({ levelofsec: 1 });
            const numoflsemp = await building.countDocuments({levelofsec: 1});
            const name =await building.findOne({ name: buildingname });
            console.log(name.id);
            let substitute;
            for(let i=0;i<numoflsemp;i++)
            {
                const shiftss= await sunday.countDocuments({ shift2:lowsbuildings[i].id });
                if (shiftss>1)
                {
                    substitute =await sunday.find({shift2:lowsbuildings[i].id});
                    
                }
               
                console.log(lowsbuildings[i].id);
                console.log(shiftss);
            }
            if(substitute!=null)
            {
                console.log(substitute[0].idnum);
                await sunday.updateOne(
                    { idnum: substitute[0].idnum },
                    { $set: { shift2: name.id } }
                  );
           state=true;
                }
          else {
            state=false;
          }
          }
          else if (shiftnum=="12-2 PM")
          {
            await sunday.updateOne(
                { idnum: id },
                { $set: { shift3: 'none' } }
              );
            const lowsbuildings =await building.find({ levelofsec: 1 });
            const numoflsemp = await building.countDocuments({levelofsec: 1});
            const name =await building.findOne({ name: buildingname });
            console.log(name.id);
            let substitute;
            for(let i=0;i<numoflsemp;i++)
            {
                const shiftss= await sunday.countDocuments({ shift3:lowsbuildings[i].id });
                if (shiftss>1)
                {
                    substitute =await sunday.find({shift3:lowsbuildings[i].id});
                    
                }
               
                console.log(lowsbuildings[i].id);
                console.log(shiftss);
            }
            if(substitute!=null)
            {
                console.log(substitute[0].idnum);
                await sunday.updateOne(
                    { idnum: substitute[0].idnum },
                    { $set: { shift3: name.id } }
                  );
           state=true;
                }
          else {
            state=false;
          }
          }
          else if (shiftnum=="2-4 PM")
          {   await sunday.updateOne(
            { idnum: id },
            { $set: { shift4: 'none' } }
          );
        const lowsbuildings =await building.find({ levelofsec: 1 });
        const numoflsemp = await building.countDocuments({levelofsec: 1});
        const name =await building.findOne({ name: buildingname });
        console.log(name.id);
        let substitute;
        for(let i=0;i<numoflsemp;i++)
        {
            const shiftss= await sunday.countDocuments({ shift4:lowsbuildings[i].id });
            if (shiftss>1)
            {
                substitute =await sunday.find({shift4:lowsbuildings[i].id});
                
            }
           
            console.log(lowsbuildings[i].id);
            console.log(shiftss);
        }
        if(substitute!=null)
        {
            console.log(substitute[0].idnum);
            await sunday.updateOne(
                { idnum: substitute[0].idnum },
                { $set: { shift4: name.id } }
              );
       state=true;
            }
      else {
        state=false;
      }
          }


    }
    else  if(day=="monday")
    {
       
        if (shiftnum=="8-10 PM")
        {
          await monday.updateOne(
              { idnum: id },
              { $set: { shift1: 'none' } }
            );
          const lowsbuildings =await building.find({ levelofsec: 1 });
          const numoflsemp = await building.countDocuments({levelofsec: 1});
          const name =await building.findOne({ name: buildingname });
          console.log(name.id);
          let substitute;
          for(let i=0;i<numoflsemp;i++)
          {
              const shiftss= await monday.countDocuments({ shift1:lowsbuildings[i].id });
              if (shiftss>1)
              {
                  substitute =await monday.find({shift1:lowsbuildings[i].id});
                  
              }
             
              console.log(lowsbuildings[i].id);
              console.log(shiftss);
          }
          if(substitute!=null)
          {
              console.log(substitute[0].idnum);
              await monday.updateOne(
                  { idnum: substitute[0].idnum },
                  { $set: { shift1: name.id } }
                );
         state=true;
              }
        else {
          state=false;
        }
           
            
        }
        else if (shiftnum=="10-12 PM")
        {
          await monday.updateOne(
              { idnum: id },
              { $set: { shift2: 'none' } }
            );
          const lowsbuildings =await building.find({ levelofsec: 1 });
          const numoflsemp = await building.countDocuments({levelofsec: 1});
          const name =await building.findOne({ name: buildingname });
          console.log(name.id);
          let substitute;
          for(let i=0;i<numoflsemp;i++)
          {
              const shiftss= await monday.countDocuments({ shift2:lowsbuildings[i].id });
              if (shiftss>1)
              {
                  substitute =await monday.find({shift2:lowsbuildings[i].id});
                  
              }
             
              console.log(lowsbuildings[i].id);
              console.log(shiftss);
          }
          if(substitute!=null)
          {
              console.log(substitute[0].idnum);
              await monday.updateOne(
                  { idnum: substitute[0].idnum },
                  { $set: { shift2: name.id } }
                );
         state=true;
              }
        else {
          state=false;
        }
        }
        else if (shiftnum=="12-2 PM")
        {
          await monday.updateOne(
              { idnum: id },
              { $set: { shift3: 'none' } }
            );
          const lowsbuildings =await building.find({ levelofsec: 1 });
          const numoflsemp = await building.countDocuments({levelofsec: 1});
          const name =await building.findOne({ name: buildingname });
          console.log(name.id);
          let substitute;
          for(let i=0;i<numoflsemp;i++)
          {
              const shiftss= await monday.countDocuments({ shift3:lowsbuildings[i].id });
              if (shiftss>1)
              {
                  substitute =await monday.find({shift3:lowsbuildings[i].id});
                  
              }
             
              console.log(lowsbuildings[i].id);
              console.log(shiftss);
          }
          if(substitute!=null)
          {
              console.log(substitute[0].idnum);
              await monday.updateOne(
                  { idnum: substitute[0].idnum },
                  { $set: { shift3: name.id } }
                );
         state=true;
              }
        else {
          state=false;
        }
        }
        else if (shiftnum=="2-4 PM")
        {   await monday.updateOne(
          { idnum: id },
          { $set: { shift4: 'none' } }
        );
      const lowsbuildings =await building.find({ levelofsec: 1 });
      const numoflsemp = await building.countDocuments({levelofsec: 1});
      const name =await building.findOne({ name: buildingname });
      console.log(name.id);
      let substitute;
      for(let i=0;i<numoflsemp;i++)
      {
          const shiftss= await monday.countDocuments({ shift4:lowsbuildings[i].id });
          if (shiftss>1)
          {
              substitute =await monday.find({shift4:lowsbuildings[i].id});
              
          }
         
          console.log(lowsbuildings[i].id);
          console.log(shiftss);
      }
      if(substitute!=null)
      {
          console.log(substitute[0].idnum);
          await monday.updateOne(
              { idnum: substitute[0].idnum },
              { $set: { shift4: name.id } }
            );
     state=true;
          }
    else {
      state=false;
    }
        }





    }
    else  if(day=="tuesday")
    {
        if (shiftnum=="8-10 PM")
          {
            await tuesday.updateOne(
                { idnum: id },
                { $set: { shift1: 'none' } }
              );
            const lowsbuildings =await building.find({ levelofsec: 1 });
            const numoflsemp = await building.countDocuments({levelofsec: 1});
            const name =await building.findOne({ name: buildingname });
            console.log(name.id);
            let substitute;
            for(let i=0;i<numoflsemp;i++)
            {
                const shiftss= await tuesday.countDocuments({ shift1:lowsbuildings[i].id });
                if (shiftss>1)
                {
                    substitute =await tuesday.find({shift1:lowsbuildings[i].id});
                    
                }
               
                console.log(lowsbuildings[i].id);
                console.log(shiftss);
            }
            if(substitute!=null)
            {
                console.log(substitute[0].idnum);
                await tuesday.updateOne(
                    { idnum: substitute[0].idnum },
                    { $set: { shift1: name.id } }
                  );
           state=true;
                }
          else {
            state=false;
          }
             
              
          }
          else if (shiftnum=="10-12 PM")
          {
            await tuesday.updateOne(
                { idnum: id },
                { $set: { shift2: 'none' } }
              );
            const lowsbuildings =await building.find({ levelofsec: 1 });
            const numoflsemp = await building.countDocuments({levelofsec: 1});
            const name =await building.findOne({ name: buildingname });
            console.log(name.id);
            let substitute;
            for(let i=0;i<numoflsemp;i++)
            {
                const shiftss= await tuesday.countDocuments({ shift2:lowsbuildings[i].id });
                if (shiftss>1)
                {
                    substitute =await tuesday.find({shift2:lowsbuildings[i].id});
                    
                }
               
                console.log(lowsbuildings[i].id);
                console.log(shiftss);
            }
            if(substitute!=null)
            {
                console.log(substitute[0].idnum);
                await tuesday.updateOne(
                    { idnum: substitute[0].idnum },
                    { $set: { shift2: name.id } }
                  );
           state=true;
                }
          else {
            state=false;
          }
          }
          else if (shiftnum=="12-2 PM")
          {
            await tuesday.updateOne(
                { idnum: id },
                { $set: { shift3: 'none' } }
              );
            const lowsbuildings =await building.find({ levelofsec: 1 });
            const numoflsemp = await building.countDocuments({levelofsec: 1});
            const name =await building.findOne({ name: buildingname });
            console.log(name.id);
            let substitute;
            for(let i=0;i<numoflsemp;i++)
            {
                const shiftss= await tuesday.countDocuments({ shift3:lowsbuildings[i].id });
                if (shiftss>1)
                {
                    substitute =await tuesday.find({shift3:lowsbuildings[i].id});
                    
                }
               
                console.log(lowsbuildings[i].id);
                console.log(shiftss);
            }
            if(substitute!=null)
            {
                console.log(substitute[0].idnum);
                await tuesday.updateOne(
                    { idnum: substitute[0].idnum },
                    { $set: { shift3: name.id } }
                  );
           state=true;
                }
          else {
            state=false;
          }
          }
          else if (shiftnum=="2-4 PM")
          {   await tuesday.updateOne(
            { idnum: id },
            { $set: { shift4: 'none' } }
          );
        const lowsbuildings =await building.find({ levelofsec: 1 });
        const numoflsemp = await building.countDocuments({levelofsec: 1});
        const name =await building.findOne({ name: buildingname });
        console.log(name.id);
        let substitute;
        for(let i=0;i<numoflsemp;i++)
        {
            const shiftss= await tuesday.countDocuments({ shift4:lowsbuildings[i].id });
            if (shiftss>1)
            {
                substitute =await tuesday.find({shift4:lowsbuildings[i].id});
                
            }
           
            console.log(lowsbuildings[i].id);
            console.log(shiftss);
        }
        if(substitute!=null)
        {
            console.log(substitute[0].idnum);
            await tuesday.updateOne(
                { idnum: substitute[0].idnum },
                { $set: { shift4: name.id } }
              );
       state=true;
            }
      else {
        state=false;
      }
          }

    }
    else  if(day=="wednesday")
    {
        if (shiftnum=="8-10 PM")
        {
          await wednesday.updateOne(
              { idnum: id },
              { $set: { shift1: 'none' } }
            );
          const lowsbuildings =await building.find({ levelofsec: 1 });
          const numoflsemp = await building.countDocuments({levelofsec: 1});
          const name =await building.findOne({ name: buildingname });
          console.log(name.id);
          let substitute;
          for(let i=0;i<numoflsemp;i++)
          {
              const shiftss= await wednesday.countDocuments({ shift1:lowsbuildings[i].id });
              if (shiftss>1)
              {
                  substitute =await wednesday.find({shift1:lowsbuildings[i].id});
                  
              }
             
              console.log(lowsbuildings[i].id);
              console.log(shiftss);
          }
          if(substitute!=null)
          {
              console.log(substitute[0].idnum);
              await wednesday.updateOne(
                  { idnum: substitute[0].idnum },
                  { $set: { shift1: name.id } }
                );
         state=true;
              }
        else {
          state=false;
        }
           
            
        }
        else if (shiftnum=="10-12 PM")
        {
          await wednesday.updateOne(
              { idnum: id },
              { $set: { shift2: 'none' } }
            );
          const lowsbuildings =await building.find({ levelofsec: 1 });
          const numoflsemp = await building.countDocuments({levelofsec: 1});
          const name =await building.findOne({ name: buildingname });
          console.log(name.id);
          let substitute;
          for(let i=0;i<numoflsemp;i++)
          {
              const shiftss= await wednesday.countDocuments({ shift2:lowsbuildings[i].id });
              if (shiftss>1)
              {
                  substitute =await wednesday.find({shift2:lowsbuildings[i].id});
                  
              }
             
              console.log(lowsbuildings[i].id);
              console.log(shiftss);
          }
          if(substitute!=null)
          {
              console.log(substitute[0].idnum);
              await wednesday.updateOne(
                  { idnum: substitute[0].idnum },
                  { $set: { shift2: name.id } }
                );
         state=true;
              }
        else {
          state=false;
        }
        }
        else if (shiftnum=="12-2 PM")
        {
          await wednesday.updateOne(
              { idnum: id },
              { $set: { shift3: 'none' } }
            );
          const lowsbuildings =await building.find({ levelofsec: 1 });
          const numoflsemp = await building.countDocuments({levelofsec: 1});
          const name =await building.findOne({ name: buildingname });
          console.log(name.id);
          let substitute;
          for(let i=0;i<numoflsemp;i++)
          {
              const shiftss= await wednesday.countDocuments({ shift3:lowsbuildings[i].id });
              if (shiftss>1)
              {
                  substitute =await wednesday.find({shift3:lowsbuildings[i].id});
                  
              }
             
              console.log(lowsbuildings[i].id);
              console.log(shiftss);
          }
          if(substitute!=null)
          {
              console.log(substitute[0].idnum);
              await wednesday.updateOne(
                  { idnum: substitute[0].idnum },
                  { $set: { shift3: name.id } }
                );
         state=true;
              }
        else {
          state=false;
        }
        }
        else if (shiftnum=="2-4 PM")
        {   await wednesday.updateOne(
          { idnum: id },
          { $set: { shift4: 'none' } }
        );
      const lowsbuildings =await building.find({ levelofsec: 1 });
      const numoflsemp = await building.countDocuments({levelofsec: 1});
      const name =await building.findOne({ name: buildingname });
      console.log(name.id);
      let substitute;
      for(let i=0;i<numoflsemp;i++)
      {
          const shiftss= await wednesday.countDocuments({ shift4:lowsbuildings[i].id });
          if (shiftss>1)
          {
              substitute =await wednesday.find({shift4:lowsbuildings[i].id});
              
          }
         
          console.log(lowsbuildings[i].id);
          console.log(shiftss);
      }
      if(substitute!=null)
      {
          console.log(substitute[0].idnum);
          await wednesday.updateOne(
              { idnum: substitute[0].idnum },
              { $set: { shift4: name.id } }
            );
     state=true;
          }
    else {
      state=false;
    }
        }

    }
    else  if(day=="thursday")
    {
        if (shiftnum=="8-10 PM")
        {
          await thursday.updateOne(
              { idnum: id },
              { $set: { shift1: 'none' } }
            );
          const lowsbuildings =await building.find({ levelofsec: 1 });
          const numoflsemp = await building.countDocuments({levelofsec: 1});
          const name =await building.findOne({ name: buildingname });
          console.log(name.id);
          let substitute;
          for(let i=0;i<numoflsemp;i++)
          {
              const shiftss= await thursday.countDocuments({ shift1:lowsbuildings[i].id });
              if (shiftss>1)
              {
                  substitute =await thursday.find({shift1:lowsbuildings[i].id});
                  
              }
             
              console.log(lowsbuildings[i].id);
              console.log(shiftss);
          }
          if(substitute!=null)
          {
              console.log(substitute[0].idnum);
              await thursday.updateOne(
                  { idnum: substitute[0].idnum },
                  { $set: { shift1: name.id } }
                );
         state=true;
              }
        else {
          state=false;
        }
           
            
        }
        else if (shiftnum=="10-12 PM")
        {
          await thursday.updateOne(
              { idnum: id },
              { $set: { shift2: 'none' } }
            );
          const lowsbuildings =await building.find({ levelofsec: 1 });
          const numoflsemp = await building.countDocuments({levelofsec: 1});
          const name =await building.findOne({ name: buildingname });
          console.log(name.id);
          let substitute;
          for(let i=0;i<numoflsemp;i++)
          {
              const shiftss= await thursday.countDocuments({ shift2:lowsbuildings[i].id });
              if (shiftss>1)
              {
                  substitute =await thursday.find({shift2:lowsbuildings[i].id});
                  
              }
             
              console.log(lowsbuildings[i].id);
              console.log(shiftss);
          }
          if(substitute!=null)
          {
              console.log(substitute[0].idnum);
              await thursday.updateOne(
                  { idnum: substitute[0].idnum },
                  { $set: { shift2: name.id } }
                );
         state=true;
              }
        else {
          state=false;
        }
        }
        else if (shiftnum=="12-2 PM")
        {
          await thursday.updateOne(
              { idnum: id },
              { $set: { shift3: 'none' } }
            );
          const lowsbuildings =await building.find({ levelofsec: 1 });
          const numoflsemp = await building.countDocuments({levelofsec: 1});
          const name =await building.findOne({ name: buildingname });
          console.log(name.id);
          let substitute;
          for(let i=0;i<numoflsemp;i++)
          {
              const shiftss= await thursday.countDocuments({ shift3:lowsbuildings[i].id });
              if (shiftss>1)
              {
                  substitute =await thursday.find({shift3:lowsbuildings[i].id});
                  
              }
             
              console.log(lowsbuildings[i].id);
              console.log(shiftss);
          }
          if(substitute!=null)
          {
              console.log(substitute[0].idnum);
              await thursday.updateOne(
                  { idnum: substitute[0].idnum },
                  { $set: { shift3: name.id } }
                );
         state=true;
              }
        else {
          state=false;
        }
        }
        else if (shiftnum=="2-4 PM")
        {   await thursday.updateOne(
          { idnum: id },
          { $set: { shift4: 'none' } }
        );
      const lowsbuildings =await building.find({ levelofsec: 1 });
      const numoflsemp = await building.countDocuments({levelofsec: 1});
      const name =await building.findOne({ name: buildingname });
      console.log(name.id);
      let substitute;
      for(let i=0;i<numoflsemp;i++)
      {
          const shiftss= await thursday.countDocuments({ shift4:lowsbuildings[i].id });
          if (shiftss>1)
          {
              substitute =await thursday.find({shift4:lowsbuildings[i].id});
              
          }
         
          console.log(lowsbuildings[i].id);
          console.log(shiftss);
      }
      if(substitute!=null)
      {
          console.log(substitute[0].idnum);
          await thursday.updateOne(
              { idnum: substitute[0].idnum },
              { $set: { shift4: name.id } }
            );
     state=true;
          }
    else {
      state=false;
    }
        }

    }
    console.log(req.body);
 
  
    res.send({status:"ok",state})
    


});

//when the admin reject the absence form
router.post("/shiftabsencereject",async(req,res)=>{
   
    let {id,shiftnum,day,buildingname} =req.body;
  
    console.log(req.body);
  
    await shiftabsence.deleteOne({ idnum: id,day:day,shiftnum:shiftnum,buildingname:buildingname });

    res.send({status:"ok"})


});
router.post("/viewshiftabsence",async(req,res)=>{
   
 

  try {
    const shift =await shiftabsence.find();
    // let name ="lama";
    // console.log("hello from admin API");
    // return res.json({name});
    console.log(shift);
    return res.json({shift});
    
} catch (error) {
    console.error("something went wrong with /admin API: ", error)
}

});



module.exports=router;