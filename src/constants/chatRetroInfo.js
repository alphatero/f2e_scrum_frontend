export const chatRetroInfo = {
  page: 'chatReview',
  previousPageName: '/chat/sprint-review',
  nextPage: '/',
  button: '結束 Sprint ！！',
  beginMsg: {
    time: '',
    text: '十分鐘後...',
  },
  chattingLog: [
    {
      id: 0,
      character: 'Scrum Master',
      avatar: '/images/chat-scrum-master.png',
      content: [
        '我們開始這個sprint的retro囉！ retro要講的三件事情',
        '1. 在 Sprint 進展良好的是什麼？',
        '1. 在 Sprint 進展良好的是什麼？ \n2. 在 Sprint 可以改善的地方？ \n3.在下一個 Sprint 團隊可以嘗試改善的是什麼？\n大家試著講講看吧！切記要針對事情，不要帶入過多個人的情緒唷！',
      ],
      submitBySelf: false,
    },
    {
      id: 1,
      character: '工程師',
      avatar: '/images/chat-dev.png',
      content: ['可以記錄這次的開發時間，使下個sprint在預估點數的時候可以再更精準！'],
      submitBySelf: false,
    },
    {
      id: 2,
      character: '系統分析師',
      avatar: '/images/chat-dev.png',
      content: ['大家在開發上都互相cover，讓任務有準時在時間內完成，大家真的都超棒的！'],
      submitBySelf: false,
    },
  ],
  speakingLoadingData: {
    id: null,
    character: '我',
    avatar: '/images/chat-ui.png',
    content: null,
    time: '',
    submitBySelf: true,
  },
  requestMsg: [
    {
      id: 0,
      text: '這個專案都靠我欸！',
      requestList: [
        {
          id: 100,
          character: 'Scrum Master',
          avatar: '/images/chat-scrum-master.png',
          content: [
            '設計師要記得～做專案的時候，大家都很努力哦，沒有大家這個專案也無法開始。大家的付出都是很棒的！',
          ],
          submitBySelf: false,
        },
      ],
    },
    {
      id: 1,
      text: '大家都有在時間內完成項目，也漸漸越來越有默契，可以繼續保持～',
      requestList: [
        {
          id: 20,
          character: 'Scrum Master',
          avatar: '/images/chat-scrum-master.png',
          content: [
            '很好！大家在這個 Sprint 都辛苦啦，前幾次的 Sprint 問題可能會比較多，但沒關係，相信我們會越來越順利的！不吝嗇的給予建議以及稱讚，是很重要的部分喔！請大家繼續保持！',
            '另外！也推薦一個工具給你們，那就是 Conflunce ! 是可以幫助團隊在專案溝通的文件上能更系統性的整合哦！！可以多加利用！',
          ],
          time: '',
          submitBySelf: false,
        },
      ],
    },
    {
      id: 2,
      text: '不要delay到我都好！',
      requestList: [
        {
          id: 10,
          character: 'Scrum Master',
          avatar: '/images/chat-scrum-master.png',
          content: [
            '設計師在這邊要注意用詞哦～我們Retro 不是來抓戰犯，我們針對問題來解決，對專案才有幫助哦！',
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
        text: '這個專案都靠我欸！',
      },
      {
        id: 1,
        text: '大家都有在時間內完成項目，也漸漸越來越有默契，可以繼續保持～',
      },
      {
        id: 2,
        text: '不要delay到我都好！',
      },
    ],
  },

};

export default chatRetroInfo;
