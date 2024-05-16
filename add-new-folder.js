/***
 * 
 * cloudinary.v2.api
  .create_folder('martpe-web/subcategory/grocery')
  .then(console.log);
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: ''
});

[
  'grocery',
  'food',
  'home-decor',
  'personal-care',
  'electronics',
  'fashion'
].forEach((folderName) => {
  cloudinary.api
    .create_folder(`martpe/1.2/category/${folderName}`)
    .then(console.log);
});
