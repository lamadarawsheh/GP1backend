const express = require('express');
const { default: mongoose } = require('mongoose');
const emp = require('../models/employee');
const router = express.Router();
const bcrypt = require("bcrypt");
const { request } = require('express');
const AA = require('../models/Alarm');
const jwt = require("jsonwebtoken");
const JWT_SECRET = "kjhgffyukmnbvcxawewqwerfxcvbnmmmmmiudcvbjytretui?jhgd4567ugfe23456yg98765trfv";

const employee = mongoose.model("empinfo");


router.post("/signup", async (req, res) => {
    const { username, email, ID, phoneNumber, passworad, passworadRepeat } = req.body;
    console.log(req.body);
    const encryptedPassword = await bcrypt.hash(passworad, 10);
    console.log(encryptedPassword);
    try {
        //    const oldemp = await employee.findOne({email});
        //     if(oldemp){
        //        res.send({error:"Employee Exists"});
        //     }

        await employee.create({
            name: username,
            email: email,
            id: ID,
            phoneNumber: phoneNumber,
            password: encryptedPassword,
            reppassword: passworadRepeat,
        });
        res.send({ status: "ok" })

    }
    catch (error) {
        res.send({ status: "error" })
    }

});
router.post("/viewemp", async (req, res) => {
    
    try {
        const emp = await employee.find();
        // let name ="lama";
        // console.log("hello from admin API");
        // return res.json({name});
        console.log(emp);
        return res.json({emp});
        
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
