import { listOfInstruments, longestInstrumentKey } from '../instrumentSettings';
import quotes from '../quotes/index';
import { chartSettings } from './const';

/*
 * Const parth = {
 *     [listOfInstruments.SBGB]: 0.5,
 *     [listOfInstruments.SBCB]: 0.5,
 * };
 */

export const useData = () => {
  /*
   * Const portfolioPrice = quotes[longestInstrument].dates.map((date, index) => {
   *     const maxLenght = quotes[longestInstrument].dates.length;
   *     const maxLenghtSBCB = quotes[listOfInstruments.SBCB].dates.length;
   *     if(quotes[longestInstrument].dates[maxLenght - index] === quotes[listOfInstruments.SBCB].dates[maxLenghtSBCB - indexSBCB]) {
   *         indexSBCB++;
   *         return parth[longestInstrument]*quotes[longestInstrument].prices[maxLenght - index] + parth[listOfInstruments.SBCB]*quotes[listOfInstruments.SBCB].prices[maxLenghtSBCB - indexSBCB]
   *     }
   *     else {
   *         return 0;
   *     }
   * }).reverse();
   */
  return {
    datasets: Object.values(listOfInstruments).map(({ key, chartColor }) => {
      return {
        borderColor: chartColor,
        data: quotes[key].prices,
        label: key,
        ...chartSettings,
      };
    }),
    labels: quotes[longestInstrumentKey].dates,
  };
};
