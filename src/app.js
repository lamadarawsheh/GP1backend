const express= require("express");
const mongoose = require("mongoose");
const employee=require("./models/employee");
const suntabel = require('./models/suntabel');
const montabel = require('./models/montabel');
const tuetabel = require('./models/tuetabel');
const wedtabel = require('./models/wedtabel');
const thurtabel = require('./models/thurtabel');
const empRouter = require("./routes/empRoutes");
const alarmrouter=require("./routes/alarmroutes");
const viewalarm=require("./routes/viewalarm");
const shiftabsenceroute=require("./routes/shiftabsenceroute");
const thiswabsencerouter=require("./routes/thisweekabsenceroutes");
const nextwabsencerouter=require("./routes/nextweekabsenceroutes");
// const schRouter = require("./routes/schedualeRoutes");
const buildingrouteer=require("./routes/buildingsrouts");
const schviewRouter = require("./routes/schviewroutes");
const lostPackagerouter =require("./routes/lostpackageroutes");
const app =express();
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(alarmrouter);
app.use(empRouter);
app.use(viewalarm);
app.use(lostPackagerouter);

app.use(shiftabsenceroute);
app.use(thiswabsencerouter);
app.use(nextwabsencerouter);
app.use(buildingrouteer);
// app.use(schRouter);
app.use(schviewRouter);
const mongourl= "mongodb+srv://hananlama:hanan1256000@cluster0.nksaaqa.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongourl,{
    useNewUrlParser: true, 

useUnifiedTopology: true 
}).then(()=>{
    console.log("Connection to database done ");
}).catch((e)=>console.log(e));


app.listen(3000,()=>{
    console.log("server started ");
});




// app.post("/post",async(req,res)=>{
//     console.log(req.body);
//     const {data}=req.body;
//     try{
//         if(data=="hanan"){
//             res.send({status:"ok"})
//           }
//           else {
//             res.send({status:"user not found "})
//           }
//     }
//     catch{
//         res.send({status:"error"})
//     }

// });
