import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export function verifyKeyIsMatch(standardKeys, verifyKeys) {
  if (!verifyKeys) return false;

  const verifyStatus = standardKeys.every((currentKey) => verifyKeys.includes(currentKey));

  return verifyStatus;
}

export function getRequest(path, params) {
  const requestUrl = BASE_URL + path;
  const config = {
    ...params,
  };

  return axios.get(requestUrl, config);
}

export async function fetchContent(url) {
  try {
    const { data } = await getRequest(url);

    return data;
  } catch (error) {
    throw new Error(`無法從 ${url} 取得指定的資料，錯誤訊息為：${error.message}`);
  }
}
