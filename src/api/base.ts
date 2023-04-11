import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

type MethodType = 'get' | 'post';

async function api(url: string, method: MethodType, params?: object): Promise<any> {
  try {
    const { data }: any = await axios[method](baseURL + url, params);

    return data;
  } catch (error: any) {
    throw new Error(`message:${error}`);
  }
}

function get(url: string): Promise<any> {
  return api(url, 'get');
}

export const Api = {
  get,
};

export default Api;
