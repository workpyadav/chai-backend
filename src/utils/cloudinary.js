import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';



    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

    const uploadOnCloudinary = async (localFilePath) => {
        try {
            if(!localFilePath) return null;
            // Upload the file to Cloudinary
            cloudinary.uploader.upload(localFilePath, {
                resource_type: 'auto', // Automatically detect the resource type (image, video, etc
        })
        //file has been uploaded scuccessfully
        //console.log('File uploaded on cloudinary', response.url);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); // Delete the local file if upload fails
        return null;
    }
}

export {uploadOnCloudinary};