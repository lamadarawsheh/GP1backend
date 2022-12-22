const mongoose = require("mongoose");

const shiftabsenceSchema= new mongoose.Schema(
    {
        
        
        idnum:String,
        day:String,
        shiftnum:String,
        buildingname:String,
    
    },
    {
        timestamps: true,
    },
    {
        collation:"shiftabsencetable",
    }
);
mongoose.model("shiftabsencetable",shiftabsenceSchema);