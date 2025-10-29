const fs = require('fs');

const diary = '29.10.2025\nCloudy weather\nFeeling fine but unfortunately have a broken leg';

fs.writeFile('./seventh-grade.txt', diary, (err, data) => {
   if (err){
    console.error(err);
   } 
   else{
    console.log('succefully written a file');
   }
});