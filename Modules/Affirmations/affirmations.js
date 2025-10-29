const fs = require('fs');
const os = require('os');
const path = require('path');


const affirmations = [
  'This is gonna be your year!',
  'You can absolutely climb that V4!',
  'You are capable of amazing things!',
  'Every day you grow stronger and more confident!',
  'You have the power to overcome any challenge!',
  'Your determination will lead you to success!',
  'You are worthy of all your goals and dreams!',
  'Progress, not perfection, is what matters!',
  'You are becoming the best version of yourself!',
  'Your positive energy attracts positive results!'
];

const desktopPath = path.join(os.homedir(), 'Desktop'); //universal
//const desktopPath = path.join(os.homedir(), 'OneDrive', 'Pulpit'); - custom for me

function saveRandomAffirmationToDesktop() {
    const randomAffirmation = affirmations[Math.floor(Math.random()*affirmations.length)];

    // show which Desktop path we resolved (useful when Desktop is redirected by OneDrive or localized)
    console.log('Detected desktopPath:', desktopPath);

    // If Desktop doesn't exist, fall back to the user's home directory
    const targetDir = fs.existsSync(desktopPath) ? desktopPath : os.homedir();
    if (targetDir !== desktopPath) {
        console.warn('Desktop folder not found — falling back to home directory:', targetDir);
    }

    const newFilePath = path.join(targetDir, 'daily-affirmation.txt');

    // Ensure the directory exists (safe-guard). If this fails, log full error.
    try {
        fs.mkdirSync(targetDir, { recursive: true });
    } catch (mkdirErr) {
        console.error('Could not create/check target directory:', mkdirErr);
    }

    fs.writeFile(newFilePath, randomAffirmation, { encoding: 'utf8' }, (err) =>{
        if(err){
            console.error('Error: file not saved — full error follows:');
            console.error(err);
            console.error('Attempted path:', newFilePath);
        }
        else{
            console.log(`Random affirmation saved to ${newFilePath}`);
        }
    });
}

saveRandomAffirmationToDesktop();