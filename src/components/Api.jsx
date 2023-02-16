import { useEffect, useState } from 'react';
import axios from 'axios';

const apiGetInfo = async (url) => axios.get(url);
const verifyData = (apiInfo, arr) => arr.every(
  (item) => Object.prototype.hasOwnProperty.call(apiInfo, item),
);

export function Api(props) {
  const {
    requirProp, apiUrl,
  } = props;

  const [info, setInfo] = useState({});
  // console.log(apiUrl); //  eslint-disable-line no-console
  const getInfo = async () => {
    try {
      const { data } = await apiGetInfo(apiUrl);
      // console.log(data); //  eslint-disable-line no-console
      setInfo(data);
    } catch (error) {
      console.log(error.message); //  eslint-disable-line no-console
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  if (Object.keys(info).length && verifyData(info, requirProp)) {
    return info;
  }
  return false;
}

export default Api;
