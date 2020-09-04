import { listOfInstruments } from '../const';
import SBGBQuotes from './SBGB';
import SBCBQuotes from './SBCB';

const fromatQuotesDates = (quotes) => {
    return quotes.map(({date}) => (date));
};

const fromatQuotesPrices = (quotes) => {
    return quotes.map(({price}) => (+price));
};

export default ({
    [listOfInstruments.SBGB]: {
        dates: fromatQuotesDates(SBGBQuotes),
        prices: fromatQuotesPrices(SBGBQuotes),
    },
    [listOfInstruments.SBCB]: {
        dates: fromatQuotesDates(SBCBQuotes),
        prices: fromatQuotesPrices(SBCBQuotes),
    },
})