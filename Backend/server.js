const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let feedbacks = [];

app.get("/", (req,res)=>{
res.send("Backend running");
});

app.post("/feedback",(req,res)=>{

const feedback = req.body;

feedbacks.push(feedback);

res.json({message:"Feedback saved"});
});

app.get("/all-feedback",(req,res)=>{

res.json(feedbacks);

});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});