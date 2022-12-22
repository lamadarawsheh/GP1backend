const mongoose = require("mongoose");

const thisweekabsenceSchema= new mongoose.Schema(
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
        collation:"thisweekabsencetable",
    }
);
mongoose.model("thisweekabsencetable",thisweekabsenceSchema);