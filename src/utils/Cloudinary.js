import {v2 as cloudinary} from "cloudinary";
import fs from "fs";


const uploadonCloudinary = async (localfilepath) => {
    try {
        if( localfilepath) return null;
        // upload on cloudinary
        const response = await cloudinary.uploader.upload(localfilepath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("file is uploaded on cloudinary" , response.url)
        return response;
    } catch (error) {
        fs.linkSync(localfilepath) // remove the locally saved file when the upload fails and unlinks it
        return null;
        
    }
}

export {uploadonCloudinary};

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECERET // Click 'View API Keys' above to copy your API secret
    });