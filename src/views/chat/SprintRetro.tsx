import { Api } from '@/api';
import { ChatRoom } from '@/components';
import { ChatProps } from '@/types';
import { useEffect, useState } from 'react';

export function SprintRetro() {
  const apiUrl = '/chat/retro';

  const [info, setInfo] = useState<ChatProps>();

  useEffect(() => {
    Api.get<ChatProps>(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!info) return <p>loading</p>;
  return <ChatRoom props={info} page="retro" />;
}

export default SprintRetro;
