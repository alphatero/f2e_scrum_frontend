import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BlurBlockBg } from '../../components/BlurBlockBg';
import {
  IntroductionLayout,
} from '../../components/introduction/IntroductionLayout';

const neccessaryProperty = ['guide', 'titles', 'tag', 'image', 'article', 'button', 'next'];
const apiGetScrumInfo = async () => axios.get('https://f2e-scrum-backend.onrender.com/api/introduction/scrum');
const verifyData = (apiInfo) => neccessaryProperty.every(
  (item) => Object.prototype.hasOwnProperty.call(apiInfo, item),
);
const notFoundPage = () => (
  <div className="h-screen flex place-content-center">
    <div className="self-center w-fit h-fit p-10 max-w-5xl mx-auto">
      <BlurBlockBg type="B">
        <span className="text-9xl text-slate-400 mr-3">404</span>
        <span className="text-xl text-slate-400">NOT FOUND PAGE</span>
        <p className="text-2xl text-slate-500 mt-3">You didn&apos;t break the internet, but we failed to get the data, please refresh the page or contact the author.</p>
      </BlurBlockBg>
    </div>
  </div>
);

export function Scrum() {
  const navigate = useNavigate();
  const [scrumInfo, setScrumInfo] = useState({});

  const backHome = () => {
    navigate('/');
  };

  const getScrumInfo = async () => {
    try {
      const { data } = await apiGetScrumInfo();
      setScrumInfo(data);
    } catch (error) {
      console.log(error.message); //  eslint-disable-line no-console
      backHome();
    }
  };

  useEffect(() => {
    getScrumInfo();
  }, []);

  if (Object.keys(scrumInfo).length && verifyData(scrumInfo)) {
    return (<IntroductionLayout info={scrumInfo} />);
  }
  return notFoundPage();
}

export default Scrum;
