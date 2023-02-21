import { useEffect, useState } from 'react';
import { IntroductionLayout } from '../../components';
import { GetData } from '../../components/GetData';

const apiSet = {
  requirProp: ['guide', 'titles', 'tag', 'image', 'article', 'button', 'next'],
  apiUrl: `${process.env.REACT_APP_API_URL}/introduction/scrum`,
};

export function Scrum() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    GetData(apiSet).then((data) => {
      setInfo(data);
    });
  }, []);

  if (!Object.keys(info).length) return (<p>loading</p>);

  return (
    <IntroductionLayout info={info} />
  );
}

export default Scrum;
