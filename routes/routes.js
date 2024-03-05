const express = require("express");
const router = express.Router();
const Mobile = require("../models/mobile.model");
const Joi = require('joi')
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

router.post("/login", (req, res) => {
    const {username} = req.body
    res.cookie("username", username)
    res.json(username)
})

router.get("/logout", (req, res)=>{
    res.clearCookie('username')
    res.send('Logout successful')
})



module.exports = router;
