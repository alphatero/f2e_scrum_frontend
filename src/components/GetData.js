import axios from 'axios';

const apiGetInfo = async (url) => axios.get(url);
const verifyData = (apiInfo, arr) => arr.every(
  (item) => Object.prototype.hasOwnProperty.call(apiInfo, item),
);

const getInfo = async (url) => {
  try {
    const { data } = await apiGetInfo(url);
    return data;
  } catch (error) {
    throw new Error(`Fail to fetch ${url}: ${error.message}`);
  }
};

export async function GetData(props) {
  const {
    requirProp, apiUrl,
  } = props;

  return getInfo(apiUrl).then((data) => {
    if (!verifyData(data, requirProp)) return {};
    return data;
  });
}

export default GetData;
