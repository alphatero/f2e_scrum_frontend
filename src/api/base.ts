import axios, { AxiosRequestConfig, AxiosResponse} from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}


async function api<T, R>(url: string, method: Method, params?: T): Promise<R> {
  const config: AxiosRequestConfig = {
    method: method,
    url: `${baseURL}${url}`,
    data: params,
  };

  try {
    const req: AxiosResponse= await axios(config);

    return req.data;
  } catch (error) {
    throw new Error('message:'+ String(error));
  }
}

function get(url: string) {
  return api(url, Method.GET);
}

export const Api = {
  get,
};

export default Api;
