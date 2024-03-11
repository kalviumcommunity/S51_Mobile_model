const express = require("express");
const router = express.Router();
const Mobile = require("../models/mobile.model");
const Joi = require('joi')
const bcrypt = require("bcrypt")
const users = require("../models/User")

const schema = Joi.object({
    modelId:Joi.number().required(),
    Manufacturer: Joi.string().required(),
    Specification: Joi.string().required(),
    Price: Joi.string().required(),
    Back_Camera: Joi.string().required(),
    Battery_Capacity: Joi.string().required(),
    Front_Camera: Joi.string().required(),
    Mobile_Model: Joi.string().required(),
    Operating_System: Joi.string().required(),
    Release_Year: Joi.number().required()
})
// GET request to fetch mobile models
router.get("/models", async (req, res) => {
    try {
        const mobile = await Mobile.find(); 
        res.status(200).send(mobile);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
});

// POST request to add new data
router.post("/post", async (req, res) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
          

    try{
        if (!error) {
        const newMobileData = req.body;
        const newMobile = new Mobile(newMobileData);
        const savedMobile = await newMobile.save();
        res.status(201).send(savedMobile);
    }
    else {
        return res.status(400).send({
            message: `Bad request, error:${error}`
        })
        console.error(error)
    }

    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
});

// PATCH request to update data based on _id in the URL
router.patch("/update/:id", async (req, res) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
          

    try{
        if (!error) {
        const { id } = req.params;
        const updateData = req.body;
        const updatedMobile = await Mobile.findOneAndUpdate({"modelId":id}, updateData, { new: true });

        if (!updatedMobile) {
            console.error(`Mobile with _id ${id} not found`);
            return res.status(404).send("Mobile not found");
        }

        console.log("Updated Mobile:", updatedMobile);
        res.status(200).send(updatedMobile);
    } 
    else {
        return res.status(400).send({
            message: `Bad request, error:${error}`
        })
        console.error(error)
    }}
catch (error) {
        console.error("Error during update:", error);
        res.status(500).send("Server Error");
    }
});

// DELETE request to remove a mobile document based on _id
router.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMobile = await Mobile.findByIdAndDelete(id);

        if (!deletedMobile) {
            console.error(`Mobile with _id ${id} not found`);
            return res.status(404).send("Mobile not found");
        }

        console.log("Deleted Mobile:", deletedMobile);
        res.status(200).send(deletedMobile);
    } catch (error) {
        console.error("Error during delete:", error);
        res.status(500).send("Server Error");
    }
});

const jwt = require('jsonwebtoken')
const data =[ {
    username:"jas",
    password: "$2b$10$BhWuiXsoCRXidJb36mQyHevurv4J0/.e3kdqVnEC3Hig/SibpubOa"
}]

router.post("/login", async(req, res) => {
    const {username, password} = req.body
    try{
        const user = data.find(user => user.username == username)
        if(!user){
            return res.status(400).json({"message": "user not found"})
        }   
        const verifier = bcrypt.compare(password, user.password)
        if (verifier){
            const authtoken = jwt.sign({ username: username },process.env.ACCESS_TOKEN);
            return res.status(200).json({
                "authtoken": authtoken
            })
        }
            return res.status(400).json({
                "message": "passwords do not match"
            })
        

    }catch(err){
        console.log(err.message, "132")
    }
    // res.cookie("username", username)
    // res.json(username)
})

router.get("/logout", (req, res)=>{
    res.clearCookie('username')
    res.send('Logout successful')
})


module.exports = router;
