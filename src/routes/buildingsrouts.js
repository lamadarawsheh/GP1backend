const express = require('express');
const { default: mongoose } = require('mongoose');
const emp = require('../models/employee');
const router = express.Router();
const bcrypt = require("bcrypt");
const { request } = require('express');
const AA = require('../models/Alarm');
const jwt = require("jsonwebtoken");
const build = require('../models/building');
const JWT_SECRET = "kjhgffyukmnbvcxawewqwerfxcvbnmmmmmiudcvbjytretui?jhgd4567ugfe23456yg98765trfv";

const employee = mongoose.model("empinfo");
const building = mongoose.model("buildinginfo");


router.post("/viewbuilding", async (req, res) => {
    
    try {
        
        var buildinginf=await building.find();
        // let name ="lama";
        // console.log("hello from admin API");
        // return res.json({name});
        console.log(buildinginf);
        return res.json({buildinginf});
        
    } catch (error) {
        console.error("something went wrong with /admin API: ", error)
    }
});


router.post("/deleteemp", async (req, res) => {
    const { id } = req.body;
    console.log(req.body);
    try {
        const emp = await employee.deleteOne({id:id});
     
      
        return res.json({status: "ok"});
        
    } catch (error) {
        console.error("something went wrong with /admin API: ", error)
    }
});


router.post("/signin", async (req, res) => {
    const { email, passworad } = req.body;
    //  console.log(req.body);
    //  console.log(passworad);
    // console.log(employee.password);

    const emp = await employee.findOne({ email });
    // console.log(emp.password);
    if (!emp) {
        return res.json({ error: "Employee Not found " });
    }

    if (await bcrypt.compare(passworad, emp.password)) {
        //  const token = jwt.sign({name:emp.name},JWT_SECRET);

        if (res.status(201)) {
            console.log(emp.name);
            return res.json({ status: "ok", data: emp.name, id: emp.id });
        }
        else {
            return res.json({ error: "error" });
        }
    }
    return res.json({ status: "error", error: "invalid password" });

});





module.exports = router;
