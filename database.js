const mongoose = require("mongoose")
require("dotenv").config()
const Connect = async () => {
    try {
        await mongoose.connect(process.env.DataBase)
        console.log("connected to mongoDB")

    }
    catch (err) {
        console.error(err)
    }
}
const isConnected = () => mongoose.connection.readyState === 1 ? true : false
module.exports = { Connect, isConnected }
