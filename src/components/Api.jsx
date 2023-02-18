import { useEffect, useState } from 'react';
import axios from 'axios';

const apiGetInfo = async (url) => axios.get(url);
const verifyData = (apiInfo, arr) => arr.every(
  (item) => Object.prototype.hasOwnProperty.call(apiInfo, item),
);

const getInfo = async (apiUrl) => {
  try {
    const { data } = await apiGetInfo(apiUrl);
    return data;
  } catch (error) {
    throw new Error(`Fail to fetch ${apiUrl}: ${error.message}`);
  }
};

export function Api(props) {
  const {
    requirProp, apiUrl,
  } = props;
  const [info, setInfo] = useState({});

  useEffect(() => {
    getInfo(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!verifyData(info, requirProp)) return false;
  return info;
}

export default Api;
