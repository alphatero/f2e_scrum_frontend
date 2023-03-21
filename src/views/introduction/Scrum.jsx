import { useState, useEffect } from 'react';
import {
  IntroductionLayout,
} from 'components';
// import { scrumInfo } from 'constants/introductionScrum';
import { Api } from '../../api/index';

const apiUrl = '/introduction/scrum';

export function Scrum() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    Api.get(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!Object.keys(info).length) return (<p>loading</p>);

  return (
    <IntroductionLayout info={info} />
  );
}

export default Scrum;
