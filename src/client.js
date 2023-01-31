import axios from 'axios';
// import {URLS} from '../constants/url';

export const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    Accept: 'application/json',
    lang: 'ru',
  },
});

API.interceptors.request.use(request => {

  return request;
});

API.interceptors.response.use(
  
);