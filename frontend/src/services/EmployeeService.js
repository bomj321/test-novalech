import axios from 'axios';
import environment from '../libs/environment';

export default {
  GetEmployees: () =>
    axios({
      method: 'GET',
      url: `${environment.baseUrl}/employees`,
    }),
};
