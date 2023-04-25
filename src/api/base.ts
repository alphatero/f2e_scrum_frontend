import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

type MethodType = 'get' | 'post';

async function api<T>(url: string, method: MethodType, params?: object): Promise<T> {
  try {
    const { data } = await axios[method]<T>(baseURL + url, params);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error)
      throw new Error(`message:${error.message}`);
    else
      throw new Error(`message:${String(error)}`);
  }
}

function get<T>(url: string): Promise<T> {
  return api(url, 'get');
}

export const Api = {
  get,
};

export default Api;
