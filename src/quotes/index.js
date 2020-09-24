import { importQuotes, longestInstrumentKey } from '../instrumentSettings';

const fromatQuotesDates = (instrumentQuotes) =>
  instrumentQuotes.map(({ date }) => date);

const fromatQuotesPrices = (quotes) => {
  const longestInstrument = importQuotes[longestInstrumentKey];

  const nextQuotesPrices = longestInstrument.map(({ date: currentDate }) => {
    const isExistCurrentDate = quotes.find(
      ({ date: dateCurrentInstrument }) =>
        dateCurrentInstrument === currentDate,
    );
    const nextPrice = isExistCurrentDate
      ? Number(isExistCurrentDate.price)
      : null;

    return nextPrice;
  });

  return nextQuotesPrices;
};

export default Object.entries(importQuotes).reduce((acc, [key, value]) => {
  acc[key] = {
    dates: fromatQuotesDates(value),
    prices: fromatQuotesPrices(value),
  };
  return acc;
}, {});
