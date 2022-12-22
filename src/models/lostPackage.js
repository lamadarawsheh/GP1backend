const mongoose = require("mongoose");

const lostpakegeSchema= new mongoose.Schema(
    {
        builidingname:String,
        discreption :String,
        imgname:String,
       
       
    },
    {
        timestamps: true,
    },
    {
        collation:"lostpakegeinfo",
    }
);
mongoose.model("lostpakegeinfo",lostpakegeSchema);