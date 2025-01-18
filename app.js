const multer=require('multer')
const cloudinary=require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');



const multerCloudinaryConfig=(API_KEY,API_SECRET,CLOUD_NAME,FOLDER_NAME)=>{
    try {
        
        cloudinary.config({ 
            cloud_name: CLOUD_NAME, 
            api_key: API_KEY, 
            api_secret: API_SECRET 
        });
    
        const storage = new CloudinaryStorage({
            cloudinary: cloudinary,
            params: {
                folder: FOLDER_NAME,
                allowedFormats: ['jpg', 'png', 'jpeg','gif'],
                transformation: [{ width: 500, height: 500, crop: 'limit' }]
            }
        });
    
        const upload=multer({ storage });
        return upload;
    } catch (error) {
        console.log(error);
        return null 
    }


    
}
module.exports=multerCloudinaryConfig