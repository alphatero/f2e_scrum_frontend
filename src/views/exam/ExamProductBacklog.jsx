import { useState, useEffect } from 'react';
import { DragLayout } from 'components';
import { Api } from 'api/index';

const apiUrl = '/exam/product-backlog';

export function ExamProductBacklog() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    Api.get(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!Object.keys(info).length) return (<p>loading</p>);

  const speechTexts = {
    ready: '拖曳任務試試看吧！',
    error: '唉呀！優先度好像擺放錯誤囉！再試試看！',
  };

  return (
    <DragLayout info={info} speechTexts={speechTexts} />
  );
}

export default ExamProductBacklog;
