const mongoose = require("mongoose");

const AlarmSchema= new mongoose.Schema(
    {
        builidingname:String,
        typeofAlarm :String,
        id:String,
        
    
    },
    {
        timestamps: true,
    },
    {
        collation:"Alarmtabel",
    }
);
mongoose.model("Alarmtabel",AlarmSchema);