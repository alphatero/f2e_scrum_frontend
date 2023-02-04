import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  IntroductionLayout,
} from '../../components/introduction/IntroductionLayout';

const apiGetScrumInfo = async () => axios.get('https://f2e-scrum-backend.onrender.com/api/introduction/scrum');

export function Scrum() {
  const navigate = useNavigate();
  const [scrumInfo, setScrumInfo] = useState({});
  const neccessaryProperty = ['guide', 'titles', 'tag', 'image', 'article', 'button', 'next'];
  let isReturn = true;

  const backHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const getScrumInfo = async () => {
      try {
        const { data } = await apiGetScrumInfo();
        setScrumInfo(data);
      } catch (error) {
        console.log(error.message); //  eslint-disable-line no-console
        backHome();
      }
    };
    getScrumInfo();
  }, []);

  if (Object.keys(scrumInfo).length) {
    neccessaryProperty.forEach((item) => {
      if (!Object.prototype.hasOwnProperty.call(scrumInfo, item)) {
        isReturn = false;
      }
    });

    if (isReturn) {
      return (
        <IntroductionLayout info={scrumInfo} />
      );
    }
  }
  return backHome();
}

export default Scrum;
