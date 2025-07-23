import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin : process.env.CORS,
    credentials : true

}))

// to set the limit to the json reponses comming on server 
app.use(express.json({limit: "16kb"}))
// to let the server encode the url request 
app.use(express.urlencoded({extended: true , limit: "16kb"}))
// to store static public assests or to share them in local storage 
app.use(express.static("public"))
// cookie options to perform crud operations on cookies 
app.use(cookieParser())


// routes import statement 
import userRoutes from "./routes/user.routes.js";

//routes declaration
// to get router we will use middleware
// it will give control to user route
app.use("/api/v1/users", userRoutes);




export {app}