import { listOfInstruments, longestInstrumentKey } from '../instrumentSettings';
import { chartSettings} from './const';
import quotes from '../quotes/index';

// const parth = {
//     [listOfInstruments.SBGB]: 0.5,
//     [listOfInstruments.SBCB]: 0.5,
// };

export const useData = () => {

    // const portfolioPrice = quotes[longestInstrument].dates.map((date, index) => {
    //     const maxLenght = quotes[longestInstrument].dates.length;
    //     const maxLenghtSBCB = quotes[listOfInstruments.SBCB].dates.length;
    //     if(quotes[longestInstrument].dates[maxLenght - index] === quotes[listOfInstruments.SBCB].dates[maxLenghtSBCB - indexSBCB]) {
    //         indexSBCB++;
    //         return parth[longestInstrument]*quotes[longestInstrument].prices[maxLenght - index] + parth[listOfInstruments.SBCB]*quotes[listOfInstruments.SBCB].prices[maxLenghtSBCB - indexSBCB]
    //     }
    //     else {
    //         return 0;
    //     }
    // }).reverse();
    return {
        labels: quotes[longestInstrumentKey].dates,
        datasets: Object.values(listOfInstruments).map(({ key, chartColor }) => {
            return {
                label: key,
                borderColor: chartColor,
                data: quotes[key].prices,
                ...chartSettings,
            }
        })
    };
};
