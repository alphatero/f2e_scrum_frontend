import { IntroductionLayout } from 'components';
import { Api } from 'api';
import { useEffect, useState } from 'react';
import { IntroductionInfoProps } from 'types';

export function Scrum() {
  const apiUrl = '/introduction/scrum';

  const [info, setInfo] = useState<IntroductionInfoProps>();

  useEffect(() => {
    Api.get<IntroductionInfoProps>(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!info) return <p>loading</p>;
  return <IntroductionLayout info={info} />;
}

export default Scrum;
