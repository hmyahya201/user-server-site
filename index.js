const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json())

const users = [
    {id:1, name:"Wazid", email:"wazid@gmail.com"},
    {id:2, name:"Riaz", email:"riaz@gmail.com"},
    {id:3, name:"Tanzid", email:"tanzid@gmail.com"},
]

app.get('/', (req, res)=>{
    res.send("The server is running");
})

app.get('/users', (req, res)=>{
    res.send(users)
})

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(users)
})

app.listen(port, ()=>{
    console.log("it's corrects")
})