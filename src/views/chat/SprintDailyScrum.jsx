import clsx from 'clsx';
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
    previousPageName, beginMsg, speakingLoadingData, chatLogData, responseMsg,
  } = ChatInfo.sprintDailyScrum;

  const [currentChatLogData, setCurrentChatLogData] = useState(chatLogData);
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
    setCurrentChatLogData((existingItems) => [...existingItems, newLog]);
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
        {
          currentChatLogData.map(
            (item) => (
              <ChatLog key={item.id + item.time} data={item} />
            ),
          )
        }
        <ChatLog data={speakingLoadingData} />
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
