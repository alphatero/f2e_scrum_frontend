import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  IntroductionLayout,
} from '../../components/introduction/IntroductionLayout';
// import { scrumInfo } from '../../constants/introductionScrum';

const apiGetScrumInfo = async () => axios.get('https://f2e-scrum-backend.onrender.com/api/introduction/scrum');

export function Scrum() {
  const [scrumInfo, setScrumInfo] = useState({});

  useEffect(() => {
    const getScrumInfo = async () => {
      try {
        const { data } = await apiGetScrumInfo();
        // console.log(data);
        setScrumInfo(data);
      } catch (error) {
        console.log(error.message); //  eslint-disable-line no-console
      }
    };
    getScrumInfo();
  }, []);

  if (Object.keys(scrumInfo).length) {
    return (
      <IntroductionLayout info={scrumInfo} />
    );
  }
}

export default Scrum;
