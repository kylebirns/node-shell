// module.exports = function () {
//     if (cmd === 'pwd'){
//         cmd = process.cwd();
//     }
    
//     process.stdout.write('\nprompt > ');
// }

module.exports = process.stdin.on('data', (data) => {
    let cmd = data.toString().trim();
    if (cmd === 'pwd'){
        cmd = process.cwd();
    }
    
    process.stdout.write('\nprompt > ');
    process.stdout.write('You typed: ' + cmd);
});