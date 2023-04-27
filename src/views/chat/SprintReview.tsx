import { Api } from '@/api';
import { ChatRoom } from '@/components';
import { ChatProps } from '@/types';
import { useEffect, useState } from 'react';

export function SprintReview() {
  const apiUrl = '/chat/review';

  const [info, setInfo] = useState<ChatProps>();

  useEffect(() => {
    Api.get<ChatProps>(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!info) return <p>loading</p>;
  return <ChatRoom props={info} page="review" />;
}

export default SprintReview;
