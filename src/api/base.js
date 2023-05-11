import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

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

function post(url, params) {
  return api(url, 'post', params);
}

export const Api = {
  get,
  post
};

export default Api;
