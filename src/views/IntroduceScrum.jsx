import {
  NavBar,
  BeginMsg,
  ChatLog,
} from '../components/introduceScrum';

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
    },
    {
      character: '工程師',
      content: ['我昨天在建制開發環境，目前還沒有遇到問題，今天預計會繼續把環境建置完畢！'],
    },
    {
      character: '系統分析師',
      content: ['我昨天在準備需求訪談內容，目前也還沒遇到問題，預計今日會與客戶訪談內容。'],
    },
  ];

  return (
    <div>
      <NavBar previousPage={previousPageName} />
      <hr />
      <BeginMsg time={beginMsg.time} text={beginMsg.text} />
      {
        chatLogData.map((item) => <ChatLog character={item.character} content={item.content} />)
      }
      <h3>IntroduceScrum is here</h3>
      <p>page content</p>
    </div>
  );
}

export default IntroduceScrum;
