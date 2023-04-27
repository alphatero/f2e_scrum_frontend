// import { chatScrumInfo } from 'constants/chatScrumInfo';
import { Api } from '@/api';
import { ChatRoom } from '@/components';
import { ChatProps } from '@/types';
import { useEffect, useState } from 'react';

export function SprintDailyScrum() {
  const apiUrl = '/chat/scrum';

  const [info, setInfo] = useState<ChatProps>();

  useEffect(() => {
    Api.get<ChatProps>(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!info) return <p>loading</p>;
  return <ChatRoom props={info} page="scrum" />;
}

export default SprintDailyScrum;
