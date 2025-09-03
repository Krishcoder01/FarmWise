dotenv.config();

// Imports

const express = require('express');
const app = express();
const dotenv = require('dotenv');


// Middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname , "public")))


// Routes



// Server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} 🚀🚀`);
});