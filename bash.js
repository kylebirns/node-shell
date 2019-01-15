const pwd = require('./pwd');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    let cmd = data.toString().trim();

    if (pwd.cmd){}
    
    process.stdout.write('You typed: ' + cmd);
});

