import clsx from 'clsx';
import {
  NavBar,
  BeginMsg,
  ChatLog,
} from '../components/introduceScrum';
import { IntroduceScrumInfo } from '../constants/IntroduceScrumInfo';
import { SubmitMsg } from '../components/icon';

function IntroduceScrum() {
  const {
    previousPageName, beginMsg, chatLogData, responseMsg,
  } = IntroduceScrumInfo;

  return (
    <div>
      <NavBar previousPage={previousPageName} />

      <hr className="mb-5" />

      <BeginMsg time={beginMsg.time} text={beginMsg.text} />
      <section className="px-2 py-5 space-y-5">
        {
          chatLogData.map(
            (item) => (
              <ChatLog
                character={item.character}
                content={item.content}
                time={item.time}
                submitBySelf={item.submitBySelf}
              />
            ),
          )
        }
      </section>

      <hr />

      <section className="px-2 py-4 space-y-2">
        <p className="text-sm text-gray-500">你是設計師，請你選擇在此情境下最合適的答案喔</p>
        <ul className="flex flex-row gap-4 overflow-x-auto">
          {
            responseMsg.map((resMsg) => <li className="shrink-0 p-2 rounded-3xl bg-gray-300">{resMsg}</li>)
          }
        </ul>
      </section>

      <hr />

      <div
        className={clsx(
          'flex flex-row items-center gap-3',
          'my-3 px-2',
        )}
      >
        <label htmlFor="sendMsg" className="flex-1 ">
          <input
            id="sendMsg"
            className={clsx(
              'w-full py-2 px-3',
              'border border-solid border-gray-400 rounded-3xl',
            )}
            placeholder="請輸入"
            type="text"
          />
        </label>
        <div className="w-6 shrink-0">
          <SubmitMsg />
        </div>
      </div>
    </div>
  );
}

export default IntroduceScrum;
