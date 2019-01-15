process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    let cmd = data.toString().trim();
    
    process.stdout.write('You typed: ' + cmd);
});

const pwd = require('./pwd');