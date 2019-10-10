const fs = require('fs');

// This line opens the file as a readable stream
const readStream = fs.createReadStream(__dirname + '/test.csv');


readStream.on("data", function(data) {
  var chunk = data.toString();
  console.log(chunk);
});
