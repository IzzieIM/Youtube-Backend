
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env"
});

connectDB(() => {
  app.listen(process.env.PORT || 8000 , () => {
    console.log(`server is running on PORT ${process.env.PORT}`);
    app.on('error' , (error)=> {
      console.log("Database connection error:" , error);
    })
  })
})

.then()
.catch((error)=> {
  console.log("MONGODB connection failed!!" , error);
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