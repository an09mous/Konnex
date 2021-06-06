const express = require("express");
const app = express();
const port = 5003;
const cors = require('cors');
require("./db/conn");
const Bug = require("./models/bug");

// jo bhi object aa rha h use json me read krne k liye
app.use(express.json());
app.use(cors("*"));

 


// create
app.post("/bugs",async(req,res)=>{
   try{
    const user= new Bug(req.body);
    const createBug = await user.save();
    res.status(201).send(createBug);
   }catch(e){
      res.setMaxListeners(400).send(e);
   }
})

// read the data
app.get("/bugs",async(req,res)=>{
  try{
      const data= await Bug.find();
      res.send(data);
  }catch(e){
    res.send(e);
  }
})

// update by id
app.patch("/bugs/:id",async(req,res)=>{
  try{
      const _id = req.params.id;
      const updateBug = await Bug.findByIdAndUpdate(_id,req.body,{
        new:true
      });
      res.send(updateBug);

  }catch(e){
      res.status(404).send(e);
  }
})

// delete
app.delete("/bugs/:id",async(req,res)=>{
    try{
        const deleteBug = await Bug.findByIdAndDelete(req.params.id);
        if(!req.params.id){
          return res.status(400).send();
        }
        res.send(deleteBug);
    }catch(e){
      res.status(500).send(e);
    }
})

app.listen(port,()=>{
    console.log('connection is setup');
})