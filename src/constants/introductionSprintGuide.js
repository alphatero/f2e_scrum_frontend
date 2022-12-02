export const sprintGuideInfo = {
  guide:
    '接下來，Scrum 中有個很重要，且團隊成員都需要依循的流程 Sprint，也是我們最重要的精神所在唷！等我們看完介紹後一起跟著角色們實作吧！',
  titles: [
    {
      id: 0,
      content: '那麼，',
    },
    {
      id: 1,
      content: 'Sprint 是什麼？',
    },
  ],
  sectionTitle: '基本概述',
  article: [
    'Sprint 又叫短衝，是一種一直迭代、且具有固定時間限制的流程。PO, Scrum Master, DEV這三個角色皆會參與這個流程。 ',
    '在跑 Sprint 之前，我們的 PO 會與客戶或是利益關係人確認此次合作專案有哪些需要開發的功能項目，並將需求依照優先序排列開發順序，再將功能項目一一評估點數，再將它排定到每次的 Sprint 中。 而我們進入 Sprint 之後，我們的 Scrum Master 就會與開發團隊(DEV)一起參與每日的站會了解各自的進度狀況，等到Sprint 進入尾聲，就會開啟我們的檢視會議(Review)以及自省會議(Retro)囉！',
    '當我們在跑 Sprint 的時候，我們會使用 Jira 這個工具，來讓我們更好的管理專案，是個很方便的工具呢！',
  ],
  image: {
    type: 'img',
    src: '/images/introduction-sprint-guide.png',
    reference: 'https://www.titansoft.com/tw/agile_skills/scrum',
  },
  button: '讓 PO 帶你體驗他的工作吧！',
  next: '/introduction/product-backlog',
};

export default sprintGuideInfo;
