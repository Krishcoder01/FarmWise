// Make a file under config  (ex - mongoose.js) then write
const mongoose = require('mongoose') ;

async function connectDb(){
 try {
     await mongoose.connect(process.env.MONGODB_URL);
     console.log("Connected to MongoDB 🍀");
 } catch (error) {
     console.error("Error connecting to MongoDB:", error)
 }
}

 
module.exports = connectDb
