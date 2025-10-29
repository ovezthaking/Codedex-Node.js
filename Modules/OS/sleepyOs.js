// 7 days in seconds 
const SECONDS_IN_A_WEEK = 60 * 60 * 24 * 7;
// Convert uptime to hours, minutes, and seconds
const os = require('os');

const uptimeInSeconds = os.uptime();

const hours = Math.floor(uptimeInSeconds / 3600);
const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
const seconds = Math.floor(uptimeInSeconds % 60);

console.log(`You are awake for ${hours} hours ${minutes} minutes ${seconds} seconds`);

if (os.uptime()<SECONDS_IN_A_WEEK){
    console.log('You are not so tired');
}
else if (os.uptime()>SECONDS_IN_A_WEEK){
    console.log('Do u sleep sometimes?');
}

