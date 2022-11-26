import { chatScrumInfo } from '../../constants/chatScrumInfo';
import { ChatRoom } from '../../components';

export function SprintDailyScrum() {
  return (
    <ChatRoom props={chatScrumInfo} />
  );
}

export default SprintDailyScrum;
