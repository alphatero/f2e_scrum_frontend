export const chatScrumInfo = {
  page: 'chat-sprint-daily-scrum',
  nextPage: '/chat/sprint-review',
  previousPageName: '/',
  button: '進入 Review >>',
  beginMsg: {
    time: '上午 9:30',
    text: 'Scrum Master 已邀請 PO, 工程師, 系統分析師, 我, Bossss 加入群組',
  },
  chattingLog: [
    {
      id: 0,
      character: 'Scrum Master',
      avatar: '/images/chat-scrum-master.png',
      content: [
        '我們開始這個 sprint 的每日站會囉！每日站會主要要講三件事情',
        '1. 昨天做了什麼事情 2. 執行上有沒有遇到困難 3. 預計今日要做什麼  大家試著講講看吧！',
      ],
      submitBySelf: false,
    },
    {
      id: 1,
      character: '工程師',
      avatar: '/images/chat-dev.png',
      content: ['我昨天在建制開發環境，目前還沒有遇到問題，今天預計會繼續把環境建置完畢！'],
      submitBySelf: false,
    },
    {
      id: 2,
      character: '系統分析師',
      avatar: '/images/chat-dev.png',
      content: ['我昨天在準備需求訪談內容，目前也還沒遇到問題，預計今日會與客戶訪談內容。'],
      submitBySelf: false,
    },
  ],
  speakingLoadingData: {
    id: null,
    character: '我',
    avatar: '/images/chat-ui.png',
    content: null,
    submitBySelf: true,
  },
  requestMsg: [
    {
      id: 0,
      text: '（放空 ing...）',
      requestList: [
        {
          id: 100,
          character: '工程師',
          avatar: '/images/chat-dev.png',
          content: [
            '設計師你在放空嗎XD',
          ],
          submitBySelf: false,
        },
        {
          id: 101,
          character: 'Scrum Master',
          avatar: '/images/chat-scrum-master.png',
          content: [
            '設計師快回來喔！！',
          ],
          submitBySelf: false,
        },
      ],
    },
    {
      id: 1,
      text: '中午吃什麼？',
      requestList: [
        {
          id: 10,
          character: 'Bossss',
          avatar: '/images/chat-bossss.png',
          content: [
            '設計師這麼愛吃呀～等等我的午餐也交給你囉（笑',
          ],
          submitBySelf: false,
        },
        {
          id: 11,
          character: 'Scrum Master',
          avatar: '/images/chat-scrum-master.png',
          content: [
            '設計師，喜歡吃沒有錯～但我們還是要把重點放在開會喔！請認真XD',
          ],
          submitBySelf: false,
        },
      ],
    },
    {
      id: 2,
      text: '昨日繪製設計規範，目前沒有遇到問題，今日預計將繼續進行規範製作',
      requestList: [
        {
          id: 20,
          character: 'Scrum Master',
          avatar: '/images/chat-scrum-master.png',
          content: [
            '好的！看起來大家大致上沒問題，那請大家今天也繼續加油！',
          ],
          submitBySelf: false,
        },
      ],
    },
  ],
  responseMsg: {
    caption: '你是設計師，請你選擇在此情境下最合適的答案喔',
    selectList: [
      {
        id: 0,
        text: '（放空 ing...）',
      },
      {
        id: 1,
        text: '昨日繪製設計規範，目前沒有遇到問題，今日預計將繼續進行規範製作',
      },
      {
        id: 2,
        text: '中午吃什麼？',
      },
    ],
  },
};

export default chatScrumInfo;
