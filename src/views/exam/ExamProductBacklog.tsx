import { DragLayout } from '@/components';
import { ExamProductBacklogInfo } from 'constants/examProductBacklogInfo';

export function ExamProductBacklog() {
  const speechTexts = {
    ready: '拖曳任務試試看吧！',
    error: '唉呀！優先度好像擺放錯誤囉！再試試看！',
  };

  return (
    <DragLayout info={ExamProductBacklogInfo} speechTexts={speechTexts} />
  );
}

export default ExamProductBacklog;
