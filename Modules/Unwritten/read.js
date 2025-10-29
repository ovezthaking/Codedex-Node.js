const fs = require('fs');

fs.readFile('./seventh-grade.txt', 'utf8', (err, data) => {
  if (err){
    console.error(err);
    return;
  }
  else{
    console.log(data);
  }
});