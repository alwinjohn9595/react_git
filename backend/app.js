const express = require('express');

const cors = require('cors');


const Userdata = require('./model/EmployeeData')

const app = new express();

require("./model/connect");


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());



app.get("/", async(req,res)=>{
    try{
        
        const users = await Userdata.find();
        res.status(200).json(users);
    }catch( error ){
        resp.status(404).json({ message: error.message })
    }
})
app.get("/:id", async(req,res)=>{
    try{
        const user = await Userdata.findById(req.params.id);
        res.status(200).json(user);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
});


app.put("/:id",async(req,res)=>{
    console.log('hai');
    let user = await Userdata.findById(req.params.id);
    user = req.body;

    const editUser = new Userdata(user);
    try{
        await Userdata.updateOne({_id: req.params.id}, editUser);
        res.status(201).json(editUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
})


app.post("/add",async(req,res)=>{
    const user = req.body;
    console.log("inside");
    console.log(user);
    const newUser = new Userdata(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }

    
})

app.delete("/:id",async(req,res)=>{
    try{
        await Userdata.deleteOne({_id: req.params.id});
        res.status(201).json("User deleted Successfully");
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
})



const PORT = 3003;

app.listen(PORT,()=>{
    console.log(`Server runing at successfully at Port ${PORT} `)
})