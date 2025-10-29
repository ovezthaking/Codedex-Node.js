const path = require('path');

const desktopPath = path.join(process.env.USERPROFILE, 'Desktop');

const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.PNG', '.JPG', '.JPEG', '.GIF', '.WEBP'];
const files = ['test.jpg', 'test.png']

const firstImage = files.find(file => imageExtensions.includes(path.extname(file))); 

if (firstImage) {
  console.log('First image file found:', path.join(desktopPath, firstImage));
} else {
  console.log('No image files found!');
}