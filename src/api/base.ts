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

function get<T>(url: string): Promise<T> {
  return api(url, Method.GET);
}

function post<T, R>(url: string, params?: T): Promise<R> {
  return api(url, Method.POST, params);
}

export const Api = {
  get,
  post
};

export default Api;
