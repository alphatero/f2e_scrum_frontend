import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
console.log(baseURL); // eslint-disable-line
async function api(url, method, params) {
  try {
    const { data } = await axios[method](baseURL + url, params);

    return data;
  } catch (error) {
    throw new Error('message:', error);
  }
}

function get(url) {
  return api(url, 'get');
}

export const Api = {
  get,
};

export default Api;
