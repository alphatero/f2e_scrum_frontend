import { useState, useEffect } from 'react';
import { IntroductionLayout } from 'components';
import { Api } from 'api';

const apiUrl = '/introduction/product-backlog';

export function IntroProductBacklog() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    Api.get(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!Object.keys(info).length) return <p>loading</p>;

  return <IntroductionLayout info={info} />;
}

export default IntroProductBacklog;
