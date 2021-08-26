const router = require("express").Router()
const Pin = require("../models/Pin")

//create pin
router.post("/",async (req,res) => {
    const newPin = new Pin(req.body)
    try {
        const setpin = await newPin.save()
        res.status(200).json(setpin)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//get all pins

router.get("/", async (req,res) => {
    try {
        const pins = await Pin.find()
        res.status(200).json(pins)
    } catch (error) {
        res.status(500).json(error.messsage)
    }
})

module.exports = router