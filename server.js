require("dotenv").config()
const mongoose = require('mongoose')
const { Connect, isConnected } = require('./database')

const express = require('express');
const app = express();
const port = "7000"

app.get("/", (req, res) => {
  res.send(`${isConnected ? 'connected' : 'disconnected'}`)
})


app.get("/ping", (req, res) => {
  res.send("pong")
})

if (require.main === module) {

  app.listen(port, async () => {
    await Connect()
    console.log(`Server running: ${port}`);
  });
}





module.exports = app;
