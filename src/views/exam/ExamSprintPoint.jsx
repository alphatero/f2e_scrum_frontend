import { useState, useEffect } from 'react';
import { DragLayout } from 'components';
// import { ExamSprintPointInfo } from 'constants/examSprintPointInfo';
import { Api } from '../../api/index';

const apiUrl = '/exam/product-backlog';

export function ExamSprintPoint() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    Api.get(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!Object.keys(info).length) return (<p>loading</p>);

  const speechTexts = {
    ready: '目前我們團隊一次 sprint 週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數(sprint point) 大約是20點左右。',
    error: '唉呀！點數超過了！我們這次 Sprint 的點數只有 20 點唷！再調整看看吧！',
  };

  return (
    <DragLayout info={info} speechTexts={speechTexts} />
  );
}

export default ExamSprintPoint;
