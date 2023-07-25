const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = 8080;

const uri = "mongodb+srv://naderabdessaied8:Azerty4321.A@cluster0.ocbdowp.mongodb.net/user?retryWrites=true&w=majority"

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(uri)
  .then(() => console.log("Connect to Databse"))
  .catch((err) => console.log(err));


  



//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));