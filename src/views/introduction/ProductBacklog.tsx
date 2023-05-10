import { useState, useEffect } from 'react';
import { IntroductionLayout } from 'components';
import { Api } from 'api';

const apiUrl = '/introduction/product-backlog';


interface ArticleType {
  content: string[],
  id: string,
  type: string
};
interface ImageType {
  type: string,
  src: string,
  reference: string
};
interface TitleType {
  content: string,
  id: string
};
interface InfoType {
  article?: ArticleType[],
  button?: string,
  guide?: string,
  image?: ImageType,
  next?: string,
  tag?: string,
  titles?: TitleType[]
};

export function IntroProductBacklog() {
  const [info, setInfo] = useState<InfoType>({});

  useEffect(() => {
    Api.get<InfoType>(apiUrl).then((data) => setInfo(data as InfoType));
  }, []);

  if (!Object.keys(info).length) return <p>loading</p>;

  return (
    <IntroductionLayout info={info} />
  );
}

export default IntroProductBacklog;
