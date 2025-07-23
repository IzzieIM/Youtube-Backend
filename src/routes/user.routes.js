
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; // <-- Add this line

const router = Router();

// it will call register user 
router.route("/register").post(registerUser);


export default router;