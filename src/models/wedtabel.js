const mongoose = require("mongoose");

const wedSchema= new mongoose.Schema(
    {
        shift1:String,
        shift2:String,
        shift3:String,
        shift4:String,
        thiswavailable:String,
        nextwavailable:String,
        idnum:{type:String,unique:true}
      
    
    },
    {
        timestamps: true,
    },
    {
        collation:"wedtabel",
    }
);
mongoose.model("wedtabel",wedSchema);