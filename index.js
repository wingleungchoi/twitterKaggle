const _h = require('highland');
const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/train.csv');

const writeStream = fs.createWriteStream(__dirname + '/output.csv');

_h(readStream).split('\n').map(function (data) {
  const chunk = data.toString();
  const chunks = chunk.split(',');

  // writeStream.write(data, 'base64');
  console.log(chunk);
  const [_, sentiment, ...text] = chunks;
  if (chunk) {
    console.log(`__label__${sentiment} ${text.join(',')}`)
    // writeStream.write('UK\n', 'base64');
    let sentence = `${text.join(',')}`.trimStart().trimEnd();
    if ((sentence[0] === '"') && (sentence[0] === '"')) {
      sentence = sentence.slice(1, sentence.length - 1)
    }
    sentence = sentence.trim();
    return `__label__${sentiment} ${sentence}\n`;
  }
  return '';
}).pipe(writeStream);
