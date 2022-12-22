const mongoose = require("mongoose");

const buildingSchema= new mongoose.Schema(
    {    

        
        name:String,
        id:{type:String,unique:true},
        numoff:Number,
        levelofsec:Number,
        time:Number,
       
    },
    {
        timestamps: true,
    },
    {
        collation:"buildinginfo",
    }
);
mongoose.model("buildinginfo",buildingSchema);