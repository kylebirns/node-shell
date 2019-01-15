module.exports = function () {
    let pwd = process.cwd();
    process.stdout.write('You typed: ' + pwd);
    process.stdout.write('\nprompt > ');
  }
