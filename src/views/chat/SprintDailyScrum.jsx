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
    previousPageName, beginMsg, chatLogData, responseMsg,
  } = ChatInfo.sprintDailyScrum;

  const [choiceMsg, setChoiceMsg] = useState('');
  const [sendMsg, setSendMsg] = useState('');
  useEffect(() => {
    console.log('sendMsg: ', sendMsg);
  }, [sendMsg]);
  return (
    <div>
      <NavBar previousPage={previousPageName} />

      <hr className="mb-5" />

      <BeginMsg time={beginMsg.time} text={beginMsg.text} />

      <section className="px-2 py-5 space-y-5">
        {
          chatLogData.map(
            (item) => (
              <ChatLog key={item.id} data={item} />
            ),
          )
        }
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
        choiceMsg={choiceMsg}
      />
    </div>
  );
}

export default SprintDailyScrum;
