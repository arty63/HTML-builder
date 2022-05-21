const fs = require('fs');
const path = require('path');
const { stdout, stdin, exit } = process;

const filePlace = path.join(__dirname, 'new-file.txt');
const output = fs.createWriteStream(filePlace);

stdout.write('Привет! Введите какой-нибудь текст\n');

stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    exit();
  }
  output.write(data);
});

process.on('exit', () => stdout.write('До свидания! В файл "new-file.txt" записано всё.ю что вы написали))'));
process.on('SIGINT', exit);