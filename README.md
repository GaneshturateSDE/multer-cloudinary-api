# multer-cloudinary-api

A simple and easy-to-use middleware to integrate **Cloudinary** image uploads into your **Express.js** application.

## Installation

To install the `multer-cloudinary-api` package, use the following npm command:

```bash
npm install multer-cloudinary-api
```

Setup
Before using this package, you need to have a Cloudinary account and obtain the following credentials:

```bash
CLOUD_NAME: Your Cloudinary cloud name (found in your Cloudinary dashboard).
API_KEY: Your Cloudinary API key (found in your Cloudinary dashboard).
API_SECRET: Your Cloudinary API secret (also found in your Cloudinary dashboard).
FILE_NAME: The file or folder name where files will be stored on Cloudinary (you can create a folder in Cloudinary).
Once you have the credentials, you can configure them in your application.
```

#### Example Usage
Here’s an example of how to use the multer-cloudinary-api middleware in your Express.js application.

Example Code
```javascript
const express = require('express');
const multerCloudinaryConfig = require('multer-cloudinary-api');

const app = express();

// Get credentials from your Cloudinary account
const CLOUD_NAME = 'your-cloud-name';  // Replace with your Cloudinary folder name or create one
const API_KEY = 'your-api-key';        // Replace with your Cloudinary API key
const API_SECRET = 'your-api-secret';  // Replace with your Cloudinary API secret
const FOLDER_NAME = 'your-folder-name';           // The folder name on Cloudinary where files will be uploaded

// Provide Object that provides middleware for file upload
const upload = multerCloudinaryConfig(API_KEY, API_SECRET, CLOUD_NAME, FOLDER_NAME); 

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: false }));

// Route for handling single file upload
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    
    if (req.file) {
        res.send('Image uploaded successfully');
    } else {
        res.status(400).send('Error uploading image');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000'); // Server is running on port 3000. Replace with your desired port number.
});
```


#### Explanation of Code
Setting Up Cloudinary:

Replace the placeholders your-cloud-name, your-api-key, your-api-secret, and profile with your actual Cloudinary credentials and desired folder name.
The CLOUD_NAME specifies the folder where the files will be uploaded on Cloudinary (e.g., profile).
Multer Middleware:

The multerCloudinaryConfig function is used to configure Multer to upload files to Cloudinary.
upload.single('image') handles the upload of a single file where the input field in the form is named image. For multiple files, you can use upload.array('images', maxCount).
Express Server:

The Express app listens on port 3000, but you can replace it with any port number you prefer.
The /upload POST route is used to upload the file. The server responds with success or error based on the outcome of the upload.
***File Upload Handling:***

If the upload is successful, the server will respond with Image uploaded successfully.
If there is an error (e.g., no file is uploaded), the server will respond with Error uploading image.
Cloudinary Folder Structure
Files uploaded through this middleware will be stored in the specified folder on Cloudinary (e.g., profile).
You can use an existing folder or create a new one on Cloudinary.

### Instructions:
**Update Cloudinary Credentials**: Replace `your-cloud-name`, `your-api-key`, `your-api-secret`, and `your-folder-name` with your actual Cloudinary credentials and desired folder name.
