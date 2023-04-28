import clsx from 'clsx';
import useResizeObserver from 'use-resize-observer';
import { useRef, useState, useEffect, useId } from 'react';
import { Link } from 'react-router-dom';
import {
  ChatNavBar,
  BeginMsg,
  ChatLogMotion,
  ChoiceResponse,
  SubmitMsg,
} from '../chat';
import { Button } from '../common';
import { ChatProps, MsgTypes } from 'types';
import { Api } from 'api';

type ReqParams = {
  value: number;
};

interface DataProps {
  requestList: ResTypes[];
}

type ResTypes = {
  avatar: string;
  character: string;
  id: string;
  content: string[];
  submitBySelf: boolean;
};

export function ChatRoom({ props, page }: { props: ChatProps; page: string }) {
  const {
    previousPageName,
    beginMsg,
    chattingLog,
    speakingLoadingData,
    responseMsg,
    nextPage,
    button,
  } = props;

  const apiUrl = `/chat/${page}/ask`;

  const [currentChatLogData, setCurrentChatLogData] = useState<any>();
  const [lastMsg, setLastMsg] = useState<MsgTypes | null>(speakingLoadingData);
  const [choiceMsg, setChoiceMsg] = useState<{
    text: string;
    value: number | null;
  }>({
    text: '',
    value: null,
  });
  const [sendMsg, setSendMsg] = useState('');
  const { ref, height = 1 } = useResizeObserver();
  const bottomRef = useRef<HTMLDivElement>(null);

  const newId = useId();
  const updateChatLogData = (msg: string, data: DataProps) => {
    const time = new Date().toLocaleTimeString();
    const newLog = {
      id: newId,
      character: '我',
      avatar: '/images/chat-ui.png',
      content: msg,
      time,
      submitBySelf: true,
    };

    const request = data.requestList.map((item) => ({
      ...item,
      time: new Date().toLocaleTimeString(),
    }));

    setCurrentChatLogData((existingItems: any) => [
      ...existingItems,
      newLog,
      ...request,
    ]);

    if (choiceMsg.value === 2) {
      setLastMsg(null);
    }
  };

  const onSubmit = () => {
    if (choiceMsg.value === null) return;

    Api.post<ReqParams, DataProps>(apiUrl, { value: choiceMsg.value }).then(
      (data) => {
        updateChatLogData(choiceMsg.text, data);
        setChoiceMsg({ text: '', value: null });
      },
    );
  };

  useEffect(() => {
    const chattingLogWithTime = chattingLog.map((item) => ({
      ...item,
      time: new Date().toLocaleTimeString(),
    }));
    setCurrentChatLogData(chattingLogWithTime);
  }, [chattingLog]);

  useEffect(() => {
    if (bottomRef.current) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    }
  }, [height]);

  if (!currentChatLogData) return null;

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto">
      <ChatNavBar previousPage={previousPageName} />

      <section
        className={clsx(
          'flex flex-col flex-1',
          'px-2 py-5 space-y-5 overflow-y-auto',
        )}
      >
        <BeginMsg time={beginMsg.time} text={beginMsg.text} />

        <ChatLogMotion
          propsRef={ref}
          currentChatLogData={currentChatLogData}
          lastMsg={lastMsg}
        />

        {!lastMsg && (
          <Link to={nextPage}>
            <Button btnType="primary" maxWidth="none">
              {button}
            </Button>
          </Link>
        )}
        <div ref={bottomRef} />
      </section>

      <hr />

      <section className="px-2 py-4 space-y-2 bg-white/50">
        <ChoiceResponse
          setChoiceMsg={setChoiceMsg}
          caption={responseMsg.caption}
          selectList={responseMsg.selectList}
          disabled={!lastMsg}
        />
      </section>

      <hr />

      <SubmitMsg
        setSendMsg={setSendMsg}
        setChoiceMsg={setChoiceMsg}
        choiceMsg={choiceMsg.text}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default ChatRoom;
