const getOutput = require('./rules');

const fs = require('fs');
const ticker = process.argv[2];
fs.readFile(`${__dirname}/${ticker}/input.txt`, 'utf8', function(err, contents) {
    const lines = contents.split(/\n/);
    const output = getOutput[ticker](lines);
    fs.writeFile(`${__dirname}/${ticker}/output.txt`, JSON.stringify(output), () => {});
});
