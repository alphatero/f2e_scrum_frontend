import { useState, useEffect } from 'react';
import { Api } from 'api';
import { chatScrumInfo } from 'constants/chatScrumInfo';
import { ChatRoom } from 'components';

interface ChatRetroType {
  beginMsg: {
    text: string,
    time: string | number,
  },
  button: string,
  chattingLog: {
    avatar: string,
    character: string,
    content: string[],
    id: string,
    submitBySelf: boolean,
  }[],
  nextPage: string,
  previousPageName: string,
  requestMsg: {
    id: string,
    request: {
      avatar: string,
      character: string,
      content: string[],
      submitBySelf: boolean,
    },
    text: string,
    value: number,
  }[],
  responseMsg: [
    string,
    {
      [key: string]: {
        id: string,
        text: string,
      }
    }
  ],
  speakingLoadingData: {
    avatar: string,
    character: string,
    submitBySelf: boolean,
    time: string | number,
  },
}

interface AdjustChatRetroType extends ChatRetroType {
  page: string,
  chattingLog: {
    avatar: string,
    character: string,
    content: string[],
    id: string,
    submitBySelf: boolean,
    time: string,
  }[],
}

const getAdjustChatRetro = (data: ChatRetroType): AdjustChatRetroType => {
  return {
    ...data,
    page: 'chat-sprint-daily-scrum',
    chattingLog: data.chattingLog.map((chat) => {
      return {
        ...chat,
        time: new Date().toLocaleTimeString(),
      }
    }
  )}
}

export function SprintDailyScrum() {
  const [pageContent, setPageContent] = useState<ChatRetroType | AdjustChatRetroType | null>(null);

  useEffect(() => {
    Api.get('/chat/scrum').then((res) => {
      const data = getAdjustChatRetro(res);
      setPageContent(data);
    })

    Api.post('/chat/scrum/ask', {value: 0}).then((res) => {
      console.log('/chat/scrum/ask: ', res.requestList)
    })
  }, []);

  if (!pageContent) return <p>Loading...</p>;

  return (
    <ChatRoom props={pageContent} />
  );
}

export default SprintDailyScrum;
