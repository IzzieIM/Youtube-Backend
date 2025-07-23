// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})









/*
app = express();


// this is howw we connect to the database
// we use mongoose to connect to the database
;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    // what is database cannot be connected 
    //.on is a app listener there are many listeners like this
    app.on('error', (error) => {
      console.error('Database connection error:', error);
      throw err;
    });

    app.listen(process.env.PORT , () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}) ()
*/