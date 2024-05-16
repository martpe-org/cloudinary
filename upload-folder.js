const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: ''
});

const currentDomain = ''; // grocery, fashion, electronics, home-decor, personal-care, food.

if (!currentDomain) {
  console.error('Please provide a domain');
  return;
}

// The folder containing the images to upload
const folderPath = path.join(__dirname, `/1.2.1/domains/${currentDomain}`);

// List all files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  // Iterate over the files and upload them
  files.forEach((file) => {
    const filePath = path.join(
      __dirname,
      `/1.2.1/domains/${currentDomain}`,
      file
    );

    // Set the public ID as the filename (without extension)
    const publicId = path
      .parse(file)
      .name.toLowerCase()
      .replace(/\s*,\s*/g, '-')
      .replace(/\s*&\s*/g, '-')
      .replace(/\s*and\s*/g, '-')
      .replace(/\s+/g, '-');

    cloudinary.uploader.upload(
      filePath,
      {
        folder: `martpe/1.2/category/${currentDomain}`,
        resource_type: 'image',
        public_id: publicId
      },
      (error, result) => {
        if (error) {
          console.error(`Error uploading ${file}:`, error);
        } else {
          console.log(`Uploaded ${file} as ${result.public_id}`);
        }
      }
    );
  });
});

/**
 * 
 * cloudinary.v2.uploader
  .upload('7aea08362ff73c39681f961d8d1cffb6.png', {
    folder: 'martpe-web/category',
    resource_type: 'image'})
  .then(console.log);
 */
