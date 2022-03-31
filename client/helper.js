const axios = require('axios');
const config = require('../config.js');

// http://example.com/page?parameter=value&also=another
export default function getData (endpoint){
  return axios({
    method: 'get',
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
    url: endpoint,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  }).then(data => data)
    .catch(err => console.error(err));
}
