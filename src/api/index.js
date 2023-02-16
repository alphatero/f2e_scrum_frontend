import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export function getRequest(path, params) {
  const requestUrl = BASE_URL + path;
  const headers = new Headers({
    Accept: 'application/json',
    'Content-type': 'application/json',
  });
  const config = {
    headers,
    ...params,
  };
  return axios.get(requestUrl, config);
}

export default getRequest;
