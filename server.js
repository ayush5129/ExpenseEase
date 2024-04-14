const express =  require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
// const { log } = require("console");
const path = require('path');
const connectDb = require("./config/connectDb");

// config dot env file
dotenv.config();

// database call
connectDb();

// rest object 
const app = express();

// middlexpress
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
// user routes
app.use('/api/v1/users',require('./routes/userRoutes'));
// transetion routes
app.use("/api/v1/transections",require("./routes/transectionRoutes"));

// static files 
app.use(express.static(path.join(__dirname,"./client/build")));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

// port 
const PORT = 8080 || process.env.PORT;

// listen 
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`.bgRed)
})