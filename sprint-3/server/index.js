const express = require('express');
const path  = require('path');
const axios = require('axios');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());


app.get('/', (req,res) =>{
    res.json(path.join(__dirname,"model", "sidevideos.json"));
});

app.use("/videos", require("./routes/api/videos"));

const PORT = process.env.PORT || 5000
app.listen(PORT, (req,res) => [
    console.log(`Server is listening on Port ${PORT}`)
])
