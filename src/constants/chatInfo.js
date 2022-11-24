export const ChatInfo = {
  sprintDailyScrum: {
    previousPageName: 'Scrum 新手村專案',
    beginMsg: {
      time: '上午 9:30',
      text: 'Scrum Master 已邀請 PO, 工程師, 系統分析師, 我, Bossss 加入群組',
    },
    chattingLog: [
      {
        id: 0,
        character: 'Scrum Master',
        content: [
          '我們開始這個 sprint 的每日站會囉！每日站會主要要講三件事情',
          '1. 昨天做了什麼事情 2. 執行上有沒有遇到困難 3. 預計今日要做什麼  大家試著講講看吧！',
        ],
        time: '上午 9:30',
        submitBySelf: false,
      },
      {
        id: 1,
        character: '工程師',
        content: ['我昨天在建制開發環境，目前還沒有遇到問題，今天預計會繼續把環境建置完畢！'],
        time: '上午 9:32',
        submitBySelf: false,
      },
      {
        id: 2,
        character: '系統分析師',
        content: ['我昨天在準備需求訪談內容，目前也還沒遇到問題，預計今日會與客戶訪談內容。'],
        time: '上午 9:35',
        submitBySelf: false,
      },
    ],
    speakingLoadingData: {
      id: null,
      character: '我',
      content: null,
      time: '',
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
            content: [
              '設計師你在放空嗎XD',
            ],
            time: '上午 9:30',
            submitBySelf: false,
          },
          {
            id: 101,
            character: 'Scrum Master',
            content: [
              '設計師快回來喔！！',
            ],
            time: '上午 9:30',
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
            content: [
              '設計師這麼愛吃呀～等等我的午餐也交給你囉（笑',
            ],
            time: '上午 9:30',
            submitBySelf: false,
          },
          {
            id: 11,
            character: 'Scrum Master',
            content: [
              '設計師，喜歡吃沒有錯～但我們還是要把重點放在開會喔！請認真XD',
            ],
            time: '上午 9:30',
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
            content: [
              '好的！看起來大家大致上沒問題，那請大家今天也繼續加油！',
            ],
            time: '',
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
  },
};

export default ChatInfo;
