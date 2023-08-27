require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
const port = 3000; 

app.use(express.json())

const users = [];

app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
})

app.post('/create',(req,res)=>{
    const data = req.body;
    
    try {
        users.push(data);
        res.status(200).json({msg:"User is created"});
    } catch (error) {
       res.status(500).json({msg:error})
    }
    
})

app.get('/data',(req,res)=>{
    res.status(200).send(users)
})

app.put('/edit/:id',(req,res)=>{
   try {
     const id = parseInt(req.params.id);
     const newData = req.body;


     const userIndex = users.findIndex((user) => user.id === id);


     if (userIndex !== -1) {
       users[userIndex] = { ...users[userIndex], ...newData };

       res.status(200).json({ msg: "User updated", data: users });
     } else {
       res.status(404).json({ error: "User not found" });
     }
   } catch (error) {
     res.status(500).json({ error: "Something went wrong" });
   }
})

app.delete("/delete/:id", (req, res) => {
  try {
    const idToDelete = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === idToDelete);

    if (userIndex !== -1) {
      users.splice(userIndex, 1);

      res.status(200).json({ msg: "User deleted", data: users });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});


app.listen(port, () => {
  console.log(`This server is listening on port ${port}`);
});