import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  NavBar,
  BeginMsg,
  ChatLog,
  ChoiceResponse,
  SubmitMsg,
} from '../../components/chat';
import { ChatInfo } from '../../constants/chatInfo';

function SprintDailyScrum() {
  const {
    previousPageName, beginMsg, chattingLog, speakingLoadingData, responseMsg,
  } = ChatInfo.sprintDailyScrum;

  const [currentChatLogData, setCurrentChatLogData] = useState(chattingLog);
  const [choiceMsg, setChoiceMsg] = useState('');
  const [sendMsg, setSendMsg] = useState('');

  const updateChatLogData = (msg) => {
    const time = new Date().toLocaleTimeString();
    const newLog = {
      id: currentChatLogData.length,
      character: '我',
      content: msg,
      time,
      submitBySelf: true,
    };

    const res = {
      id: 13555,
      character: 'Scrum Master',
      content: [
        '鉛筆你做啊！',
      ],
      time,
      submitBySelf: false,
    };

    setCurrentChatLogData((existingItems) => [...existingItems, newLog, res]);
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

  useEffect(() => {
    if (sendMsg) updateChatLogData(sendMsg);
  }, [sendMsg]);

  return (
    <div className="flex flex-col h-full">
      <NavBar previousPage={previousPageName} />

      <section className={clsx(
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
        >

          {
          [...currentChatLogData, speakingLoadingData].map(
            (item) => {
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
