import normalization from '../helpers/normalization.json';
import { getProjectInfoMonthChart } from '../services/dappradar';

export default () => {
  Promise.all(
    normalization.reduce((acc, value) => {
      const data = {};
      if (value.dappRadar) {
        data.name = value.dappRadar;
        data.values = getProjectInfoMonthChart('ethereum', value.dappRadar);
        //console.log(acc);
        return { ...acc, data };
      } else {
        return acc;
      }
    }, {})
  )
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
};
