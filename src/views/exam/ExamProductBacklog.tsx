import { useState, useEffect } from 'react';
import { DragLayout } from 'components';
import { Api } from 'api';
import { DragInfoProps } from '@/types';

const apiUrl = '/exam/product-backlog';

export function ExamProductBacklog() {
  const [info, setInfo] = useState<DragInfoProps>();

  useEffect(() => {
    Api.get<DragInfoProps>(apiUrl).then((data) => setInfo(data));
  }, []);

  const speechTexts = {
    ready: '拖曳任務試試看吧！',
    error: '唉呀！優先度好像擺放錯誤囉！再試試看！',
  };

  if (!info) return <p>loading</p>;

  return <DragLayout info={info} speechTexts={speechTexts} />;
}

export default ExamProductBacklog;
