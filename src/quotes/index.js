import { importQuotes } from '../instrumentSettings';

const fromatQuotesDates = (instrumentQuotes) => {
    return instrumentQuotes.map(({date}) => date);
};

const fromatQuotesPrices = (quotes) => {
    return quotes.map(({price}) => (+price));
};

export default Object.entries(importQuotes).reduce((acc, [key, value]) => {acc[key] = {
    dates: fromatQuotesDates(value),
    prices: fromatQuotesPrices(value),
}; return acc;}, {});