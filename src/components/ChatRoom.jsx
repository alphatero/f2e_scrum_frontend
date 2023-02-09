import clsx from 'clsx';
import useResizeObserver from 'use-resize-observer';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChatNavBar,
  BeginMsg,
  ChatLogMotion,
  ChoiceResponse,
  SubmitMsg,
} from './chat';
import { Button } from './Button';

export function ChatRoom({ props }) {
  const {
    previousPageName,
    beginMsg,
    chattingLog,
    speakingLoadingData,
    responseMsg,
    requestMsg,
    nextPage,
    page,
    button,
  } = props;

  const [currentChatLogData, setCurrentChatLogData] = useState(chattingLog);
  const [lastMsg, setLastMsg] = useState(speakingLoadingData);
  const [choiceMsg, setChoiceMsg] = useState('');
  const [sendMsg, setSendMsg] = useState('');
  const { ref, height = 1 } = useResizeObserver();
  const bottomRef = useRef(null);

  const updateChatLogData = (msg) => {
    const time = new Date().toLocaleTimeString();
    const newLog = {
      id: currentChatLogData.length,
      character: '我',
      avatar: '/images/chat-ui.png',
      content: msg,
      time,
      submitBySelf: true,
    };

    const resMsg = requestMsg.find((req) => req.text === msg);

    for (let i = 0; i < resMsg.requestList.length; i += 1) {
      resMsg.requestList[i].time = time;
    }

    if (msg === responseMsg.selectList[1].text) {
      setLastMsg(null);
    }

    setCurrentChatLogData((existingItems) => [...existingItems, newLog, ...resMsg.requestList]);
  };

  useEffect(() => {
    if (sendMsg) updateChatLogData(sendMsg);
  }, [sendMsg]);

  useEffect(() => {
    if (bottomRef.current) {
      setTimeout(() => {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    }
  }, [height]);

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
          page={page}
          ref={ref}
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
        choiceMsg={choiceMsg}
      />
    </div>
  );
}

export default ChatRoom;
