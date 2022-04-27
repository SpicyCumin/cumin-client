const axios = require('axios');
require('dotenv').config();

function apiRequest(method, endpoint, baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/') {
  return axios({
    method: method,
    baseURL: baseUrl,
    url: endpoint,
    headers: {
      'Retry-After': 3600,
      Authorization: process.env.TOKEN,
    },
  });
}

function apiPostRequest(dataObj, endpoint) {
  return axios({
    method: 'post',
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
    url: endpoint,
    headers: {
      'Retry-After': 3600,
      Authorization: process.env.TOKEN,
    },
    data: dataObj,
  });
}

module.exports = { apiRequest, apiPostRequest };
