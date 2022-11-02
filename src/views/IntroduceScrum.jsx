import {
  NavBar,
  BeginMsg,
  ChatLog,
} from '../components/introduceScrum';
import { SubmitMsg } from '../components/icon';

function IntroduceScrum() {
  const previousPageName = 'Scrum 新手村專案';
  const beginMsg = {
    time: '上午 9:30',
    text: 'Scrum Master 已邀請 PO, 工程師, 系統分析師, 我, Bossss 加入群組',
  };
  const chatLogData = [
    {
      character: 'Scrum Master',
      content: [
        '我們開始這個 sprint 的每日站會囉！每日站會主要要講三件事情',
        '1. 昨天做了什麼事情 2. 執行上有沒有遇到困難 3. 預計今日要做什麼  大家試著講講看吧！',
      ],
      time: '上午 9:30',
      submitBySelf: false,
    },
    {
      character: '工程師',
      content: ['我昨天在建制開發環境，目前還沒有遇到問題，今天預計會繼續把環境建置完畢！'],
      time: '上午 9:32',
      submitBySelf: false,
    },
    {
      character: '系統分析師',
      content: ['我昨天在準備需求訪談內容，目前也還沒遇到問題，預計今日會與客戶訪談內容。'],
      time: '上午 9:35',
      submitBySelf: false,
    },
    {
      character: '我',
      content: ['。。。'],
      time: '',
      submitBySelf: true,
    },
  ];
  const responseMsg = [
    '（放空 ing...）',
    '昨日繪製設計規範，目前沒有遇到問題，今日預計將繼續進行規範製作',
    '中午吃什麼？',
  ];

  return (
    <div>
      <NavBar previousPage={previousPageName} />
      <hr className="mb-5" />
      <BeginMsg time={beginMsg.time} text={beginMsg.text} />
      <section className="px-2 py-5 space-y-5">
        {
          chatLogData.map((item) => <ChatLog character={item.character} content={item.content} time={item.time} submitBySelf={item.submitBySelf} />)
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
      <div className="my-3 px-2 flex flex-row items-center gap-3">
        <label htmlFor="sendMsg" className="flex-1 ">
          <input id="sendMsg" className="w-full py-2 px-3 border border-solid border-gray-400 rounded-3xl" placeholder="請輸入" type="text" />
        </label>
        <div className="w-6 shrink-0">
          <SubmitMsg />
        </div>
      </div>
    </div>
  );
}

export default IntroduceScrum;
