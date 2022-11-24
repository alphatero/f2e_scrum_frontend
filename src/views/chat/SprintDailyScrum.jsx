import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  ChatNavBar,
  BeginMsg,
  ChatLog,
  ChoiceResponse,
  SubmitMsg,
  Button,
} from '../../components';
import { ChatInfo } from '../../constants/chatInfo';

function SprintDailyScrum() {
  const {
    previousPageName, beginMsg, chattingLog, speakingLoadingData, responseMsg, requestMsg,
  } = ChatInfo.sprintDailyScrum;

  const [currentChatLogData, setCurrentChatLogData] = useState(chattingLog);
  const [lastMsg, setLastMsg] = useState(speakingLoadingData);
  const [choiceMsg, setChoiceMsg] = useState('');
  const [sendMsg, setSendMsg] = useState('');
  const ref = useRef(null);

  const updateChatLogData = (msg) => {
    const time = new Date().toLocaleTimeString();
    const newLog = {
      id: currentChatLogData.length,
      character: '我',
      content: msg,
      time,
      submitBySelf: true,
    };

    const resMsg = requestMsg.find((req) => req.text === msg);

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
    enter: { opacity: 1, x: 0, transition: { type: 'spring', duration: 2 } },
    exit: { opacity: 0, x: -20 },
  };

  const selfMotion = {
    enter: { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.5 } },
    exit: { opacity: 0, x: 20 },
  };

  const nextPage = () => {};

  useEffect(() => {
    if (sendMsg) updateChatLogData(sendMsg);
  }, [sendMsg]);

  return (
    <div className="flex flex-col h-full">
      <ChatNavBar previousPage={previousPageName} />

      <section
        className={clsx(
          'flex flex-col flex-1',
          'px-2 py-5 space-y-5 overflow-y-auto',
        )}
        ref={ref}
      >
        <BeginMsg time={beginMsg.time} text={beginMsg.text} />
        <motion.ul
          variants={mainMotion}
          initial="exit"
          animate="enter"
          exit="exit"
          className="flex flex-col space-y-2"
        >
          {
            [...currentChatLogData, lastMsg].map(
              (item) => {
                if (!item) return null;

                const motionValue = item.character === '我' ? selfMotion : itemMotion;

                return (
                  <motion.li key={item.id + item.time} variants={motionValue}>
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
        <Button className="text-white bg-primary" onClick={nextPage}>
          進入 Review
          {' '}
          {'>>'}
        </Button>
        )}

      </section>

      <hr />

      <section className="px-2 py-4 space-y-2 bg-white/50">
        <ChoiceResponse
          setChoiceMsg={setChoiceMsg}
          caption={responseMsg.caption}
          selectList={responseMsg.selectList}
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

export default SprintDailyScrum;
