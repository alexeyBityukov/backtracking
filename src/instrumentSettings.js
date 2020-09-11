const SBGBQuotes =  require('./quotes/SBGB').default;
const SBCBQuotes = require('./quotes/SBCB').default;
const FXGDQuotes = require('./quotes/FXGD').default;

const listOfInstruments = {
    SBCB: {
        chartColor: 'rgba(0,0,192,1)',
        key: 'SBCB'
    },
    SBGB: {
        chartColor: 'rgba(75,192,192,1)',
        key: 'SBGB'
    },
    FXGD: {
        chartColor: 'rgba(250,100,100,1)',
        key: 'FXGD'
    },
};

const importQuotes = ({
    [listOfInstruments.SBGB.key]: SBGBQuotes,
    [listOfInstruments.SBCB.key]: SBCBQuotes,
    [listOfInstruments.FXGD.key]: FXGDQuotes,
});

module.exports = {
    longestInstrumentKey: listOfInstruments.FXGD.key,
    listOfInstruments,
    importQuotes
};