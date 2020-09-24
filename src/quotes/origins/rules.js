const { listOfInstruments } = require('../../instrumentSettings');
const getOutputFinam = (lines) => {
  lines.shift();

  return lines.map((line) => {
    const parsedLine = line.split(/,/u);
    return {
      date: `${parsedLine[2].substring(6)}.${parsedLine[2].substring(
        4,
        6,
      )}.${parsedLine[2].substring(0, 4)}`,
      price: parsedLine[7],
    };
  });
};

const getOutput = {
  [listOfInstruments.SBGB]: getOutputFinam,
  [listOfInstruments.SBCB]: getOutputFinam,
  [listOfInstruments.FXGD]: getOutputFinam,
};

module.exports = getOutput;
