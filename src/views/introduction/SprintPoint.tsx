import { useState, useEffect } from 'react';
import { IntroductionLayout } from 'components';
import { Api } from 'api';
import { IntroductionInfoProps } from '@/types';

const apiUrl = '/introduction/sprint-point';

export function IntroSprintPoint() {
  const [info, setInfo] = useState<IntroductionInfoProps>();

  useEffect(() => {
    Api.get<IntroductionInfoProps>(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!info) return <p>loading</p>;

  return <IntroductionLayout info={info} />;
}

export default IntroSprintPoint;
