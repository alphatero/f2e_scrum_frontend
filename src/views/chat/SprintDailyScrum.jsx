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
          caption={responseMsg.caption}
          selectList={responseMsg.selectList}
        />
      </section>

      <hr />

      <SubmitMsg />
    </div>
  );
}

export default SprintDailyScrum;
