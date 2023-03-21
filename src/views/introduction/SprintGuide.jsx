import { useState, useEffect } from 'react';
import {
  IntroductionLayout,
} from 'components';
// import { sprintGuideInfo } from 'constants/introductionSprintGuide';
import { Api } from '../../api/index';

const apiUrl = '/introduction/sprint-guide';

export function SprintGuide() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    Api.get(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!Object.keys(info).length) return (<p>loading</p>);

  return (
    <IntroductionLayout info={info} />
  );
}

export default SprintGuide;
