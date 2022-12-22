const mongoose = require("mongoose");

const employeeSchema= new mongoose.Schema(
    {
        name:String,
        email:{type:String,unique:true},
        phoneNumber:String,
        password:String,
        reppassword:String,
        id:{type:String,unique:true}
    },
    {
        timestamps: true,
    },
    {
        collation:"empinfo",
    }
);
mongoose.model("empinfo",employeeSchema);