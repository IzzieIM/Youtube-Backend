import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)


// function is used for the callback to give access to all the model parameters

userSchema.pre('save', async function(next) {
    if(this.isModified("password")) return next();  // to check if rhe password is modified , if not then dont resave it 

    // hash the password logic
   this.password = bcrypt.hash( this.password , 10 )
   next();
})


// to check the password 
userSchema.methods.isPasswordCorrect = async function(password) {
    // logic to verify password
    await bcrypt.compare(password , this.password) 
    // it is await becasue it takes time to decrypt the password
}


// helps the user generate access token based on these parameters 
userSchema.methods.generateAccessToken = function() {
    jwt.sign(
        {
            _id : this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName

    },
    process.env.ACCESS_TOKEN_SECERET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

// helps the user generate the access token based on these parameters 
userSchema.methods.generateRefreshToken = function() {
    jwt.sign(
        {
            _id : this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName

    },
    process.env.REFRESH_TOKEN_SECERET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User" , userSchema);