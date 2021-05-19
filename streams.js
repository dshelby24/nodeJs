const fs = require('fs');
const { ReadStream } = require('tty');

const redStrea = fs.createReadStream ('./docs/blog3.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');



// readStream.on('data', chunk => {
//     console.log('--- NEW CHUNK ---');
//     console.log(chunk);

//     writeStream.write('\nNewChunk:\n')
// writeStream.write(chunk)
// });

readStream.pipe(writeStream);