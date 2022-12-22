const mongoose = require("mongoose");

const nextweekabsenceSchema= new mongoose.Schema(
    {
        
        
        idnum:{type:String,unique:true},
        sunday:String,
        monday:String,
        tuesday:String,
        wednesday:String,
        thursday:String,

    },
    {
        timestamps: true,
    },
    {
        collation:"nextweekabsencetable",
    }
);
mongoose.model("nextweekabsencetable",nextweekabsenceSchema);