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

  const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String,
  });
  
  //
  const userModel = mongoose.model("user", userSchema);
  
  app.post("/signup", async (req, res) => {
    // console.log(req.body);
  

    try {
      let user = await userModel.findOne({ email: req.body.email }); // missing exec()

      if (user) {
        res.send({ message: "Email id is already register", alert: false });
      } else {
        const data = userModel(req.body);
        const save = data.save();
        res.send({ message: "Successfully sign up", alert: true });
      }
  }
  catch (error) { console.log(error) }
  });

  app.post("/signin", async (req, res) => {
 

  
    try {
     let user =   await userModel.findOne({ email: req.body.email });
     
        if (user) {
          console.log(user)
          const dataSend = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: user.image,
          };
          console.log(dataSend);
          res.send({
            message: "Login is successfully",
            alert: true,
            data: dataSend,
          });
        } else {
          res.send({
            message: "Email is not available, please sign up",
            alert: false,
          });
        }
     
  }
  catch (error) { console.log(error) }
  });

  const schemaProduct = mongoose.Schema({
    name: String,
    category:String,
    image: String,
    price: String,
    description: String,
  });
  const productModel = mongoose.model("product",schemaProduct)


  app.get("/product",async(req,res)=>{
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
  })

  app.post("/uploadProduct",async(req,res)=>{
    try {
      // console.log(req.body)
      const data = await productModel(req.body)
      const datasave = await data.save()
      res.send({message : "Upload successfully"})
    }
    catch (error) { console.log(error) }
    
  })


//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));