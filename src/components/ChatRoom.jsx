import clsx from 'clsx';
import { motion } from 'framer-motion';
import useResizeObserver from 'use-resize-observer';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChatNavBar,
  BeginMsg,
  ChatLog,
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

  const mainMotion = {
    enter: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: 1 },
    },
  };

  const itemMotion = {
    enter: { opacity: 1, x: 0, transition: { type: 'spring', duration: 2.5 } },
    exit: { opacity: 0, x: -20 },
  };

  const selfMotion = {
    enter: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1 } },
    exit: { opacity: 0, x: 20 },
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
        <motion.ul
          variants={mainMotion}
          initial="exit"
          animate="enter"
          exit="exit"
          className="flex flex-col space-y-2"
          ref={ref}
        >
          {
            [...currentChatLogData, lastMsg].map(
              (item) => {
                if (!item) return null;

                const motionValue = item.character === '我' ? selfMotion : itemMotion;

                return (
                  <motion.li key={page + item.id} variants={motionValue}>
                    <ChatLog
                      data={item}
                    />
                  </motion.li>
                );
              },
            )

        }
        </motion.ul>

        {!lastMsg && (
          <Link to={nextPage}>
            <Button btnType="primary">
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
