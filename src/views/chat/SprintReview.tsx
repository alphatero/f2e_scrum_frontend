import { chatReviewInfo } from 'constants/chatReviewInfo';
import { ChatRoom } from '@/components';

export function SprintReview() {
  return <ChatRoom props={chatReviewInfo} />;
}

export default SprintReview;
