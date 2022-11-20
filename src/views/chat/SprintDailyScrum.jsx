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
    previousPageName, beginMsg, chattingLog, speakingLoadingData, chatLogData, responseMsg,
  } = ChatInfo.sprintDailyScrum;

  // const [currentChatLogData, setCurrentChatLogData] = useState(chatLogData);
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
    console.log('updateChatLogData: ');
    console.log(currentChatLogData);
    setCurrentChatLogData((existingItems) => [...existingItems, newLog]);
  };

  useEffect(() => {
    console.log('===---useEffect console.log---===');
    console.log('currentChatLogData: ', currentChatLogData);
    console.log('sendMsg: ', sendMsg);
    if (sendMsg) updateChatLogData(sendMsg);
  }, [sendMsg]);

  // const msgLog = chatLogData;
  useEffect(() => {
    const interval = setInterval(() => {
      if (!chatLogData.length > 0) return;
      console.log('===---before push---===');
      console.log('currentChatLogData: ', currentChatLogData);
      console.log('currentChatLogData length: ', currentChatLogData.length);
      console.log('chatLogData: ', chatLogData);
      console.log('chatLogData length: ', chatLogData.length);
      setCurrentChatLogData(
        () => currentChatLogData.push(
          chatLogData.shift(),
        ),
      );
      console.log('===---after push---===');
      console.log('currentChatLogData: ', currentChatLogData);
      console.log('currentChatLogData length: ', currentChatLogData.length);
      console.log('chatLogData: ', chatLogData);
      console.log('chatLogData length: ', chatLogData.length);
    }, 1500);
    // eslint-disable-next-line consistent-return
    return () => clearInterval(interval);
  }, []);

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
          currentChatLogData.length > 0
            ? currentChatLogData.map(
              (item) => (
                <ChatLog
                  key={item.id + item.time}
                  data={item}
                />
              ),
            ) : null
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
