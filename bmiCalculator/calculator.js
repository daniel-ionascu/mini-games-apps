const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmiCalculator.html", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/",function(req,res){
    console.log(Number(req.body.n1) + Number(req.body.n2));
    res.send("hi")
})


app.listen(3000, function(){
    console.log("Server started port 3000");
})