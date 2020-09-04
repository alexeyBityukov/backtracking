const { listOfInstruments }  = require( '../../const');

const getOutputSBGB = (lines) => {
    lines.shift();

    return lines.map((line) => {
        const parsedLine = line.split(/,/);
        return {
            date: parsedLine[2],
            price: parsedLine[7],
        };
    });
};

const getOutput = {
    [listOfInstruments.SBGB]: getOutputSBGB
};

module.exports = getOutput;