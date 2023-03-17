import { DragLayout } from 'components';
import { ExamSprintPointInfo } from 'constants/examSprintPointInfo';

export function ExamSprintPoint() {
  const speechTexts = {
    ready: '目前我們團隊一次 sprint 週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數(sprint point) 大約是20點左右。',
    error: '唉呀！點數超過了！我們這次 Sprint 的點數只有 20 點唷！再調整看看吧！',
  };

  return (
    <DragLayout info={ExamSprintPointInfo} speechTexts={speechTexts} />
  );
}

export default ExamSprintPoint;
