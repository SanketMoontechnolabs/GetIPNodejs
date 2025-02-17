const express = require("express");
const bodyParser = require("body-parser");
const ipRoutes = require("./GetIP");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Use the IP routes
app.use("/api/ip", ipRoutes);

app.use("/",(req,res)=>{
    res.json({status:200,message:"hello word"})
    // res.send("hello word!!")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
