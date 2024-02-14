const express = require('express');
const app = express();
const port = "7000"

// define the ping route

  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });

app.get("/",(req,res)=>{
    res.send("Hello")
  })

app.get("/ping",(req,res)=>{
  res.send("pong")
})

module.exports = app;
