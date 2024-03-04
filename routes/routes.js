const express = require("express");
const router = express.Router();
const Mobile = require("../models/mobile.model");

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
    try {
        const newMobileData = req.body;
        const newMobile = new Mobile(newMobileData);
        const savedMobile = await newMobile.save();
        res.status(201).send(savedMobile);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
});

// PATCH request to update data based on _id in the URL
router.patch("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedMobile = await Mobile.findOneAndUpdate({"modelId":id}, updateData, { new: true });

        if (!updatedMobile) {
            console.error(`Mobile with _id ${id} not found`);
            return res.status(404).send("Mobile not found");
        }

        console.log("Updated Mobile:", updatedMobile);
        res.status(200).send(updatedMobile);
    } catch (error) {
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

module.exports = router;
