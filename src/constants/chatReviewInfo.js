export const chatReviewInfo = {
  page: 'chatReview',
  previousPageName: '/chat/sprint-daily-scrum',
  nextPage: '/chat/sprint-retro',
  button: '進入 Retro >>',
  beginMsg: {
    time: '',
    text: '兩週後...',
  },
  chattingLog: [
    {
      id: 0,
      character: 'Scrum Master',
      avatar: '/images/chat-scrum-master.png',
      content: [
        '我們開始這個sprint的review囉！ review要講的事情',
        '我們來檢視在這兩週內，有沒有遇到什麼問題，導致上個sprint的東西要延到下個sprint才能做完，或是這週有哪些項目提早做完，也許下個sprint我們可以再多安排項目進來做 大家試著講講看吧！\n大家試著講講看吧！',
      ],
      submitBySelf: false,
    },
    {
      id: 1,
      character: '工程師',
      avatar: '/images/chat-dev.png',
      content: ['這個sprint中，環境建置上因遇到....困難，所以這個sprint沒有如期完成QQ'],
      submitBySelf: false,
    },
    {
      id: 2,
      character: '系統分析師',
      avatar: '/images/chat-dev.png',
      content: ['目前需求訪談過程很順利，客戶與我們的目標一致，在整個過程中非常順利，我在這次完成了需求訪談。'],
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
          character: '系統分析師',
          avatar: '/images/chat-dev.png',
          content: [
            '設計師回神喔～～',
          ],
          submitBySelf: false,
        },
        {
          id: 101,
          character: 'Scrum Master',
          avatar: '/images/chat-scrum-master.png',
          content: [
            '設計師別發呆～快回來喔！！',
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
            '設計師最近有開發什麼新美食嗎？等等開完會跟我報告一下XD',
          ],
          submitBySelf: false,
        },
        {
          id: 11,
          character: 'Scrum Master',
          avatar: '/images/chat-scrum-master.png',
          content: [
            '設計師，我們開完會再來討論吃的，要認真開會哦！',
          ],
          submitBySelf: false,
        },
      ],
    },
    {
      id: 2,
      text: '已將元件整理至設計規範，後續再繪製wireframe或是設計稿時就能更快速使用元件',
      requestList: [
        {
          id: 20,
          character: 'Scrum Master',
          avatar: '/images/chat-scrum-master.png',
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
        text: '已將元件整理至設計規範，後續再繪製wireframe或是設計稿時就能更快速使用元件',
      },
      {
        id: 2,
        text: '中午吃什麼？',
      },
    ],
  },

};

export default chatReviewInfo;
