import { useState, useEffect } from 'react';
import { IntroductionLayout } from 'components';
import { Api } from 'api';
import { IntroductionInfoProps } from 'types';

const apiUrl = '/introduction/product-backlog';

export function IntroProductBacklog() {
  const [info, setInfo] = useState<IntroductionInfoProps>();

  useEffect(() => {
    Api.get<IntroductionInfoProps>(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!info) return <p>loading</p>;

  return <IntroductionLayout info={info} />;
}

export default IntroProductBacklog;
