const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/train.csv');

const writeStream = fs.createWriteStream(__dirname + '/output.csv');

readStream.on("data", function(data) {
  var chunk = data.toString();
  writeStream.write(data, 'base64');
  // console.log(chunk);
});

// readStream.pipe(writeStream)

readStream.on('end', () => {
  writeStream.end();
});
