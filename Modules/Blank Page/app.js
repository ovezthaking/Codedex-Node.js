const fs = require('fs');

fs.unlink('./seventh-grade.txt', (err, data) => {
    if(err){
        console.error('file failed to delete!');
    }
    else{
        console.log('File deleted.');
    }
});