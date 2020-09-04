const { listOfInstruments }  = require( '../../const');

const getOutputSBGB = (lines) => {
    lines.shift();

    return lines.map((line) => {
        const parsedLine = line.split(/,/);
        return {
            date: parsedLine[2].substring(6) + '.' + parsedLine[2].substring(4,6) + '.' + parsedLine[2].substring(0,4),
            price: parsedLine[7],
        };
    });
};

const getOutput = {
    [listOfInstruments.SBGB]: getOutputSBGB,
    [listOfInstruments.SBCB]: getOutputSBGB,
};

module.exports = getOutput;