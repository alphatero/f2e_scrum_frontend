export const introductionSprintPoint = {
  guide:
    '當 PO product backlog 列出來之後，SM 會幫我們評估每個sprint最多可以負擔的點數，再來會需要請我們估點數，點數是用來衡量速度，用大概花費的時間估相對應的點數，我們平常會使用 Jira 這個軟體來管理專案，大家也可以透過 Jira 知道當前 Sprint 要做的事情唷！',
  titles: [
    {
      id: 0,
      content: 'Story Point 的目的：',
    },
    {
      id: 1,
      content: '衡量速度',
    },
  ],
  tag: 'hint',
  article: [
    {
      id: 0,
      type: 'default',
      content: '所有的專案管理都會面臨到評估進度的困難：',
    },
    {
      id: 1,
      type: 'quote',
      content: ['現在事情完成度多少？', '進度落後多少？', '還有幾天會完成呢？'],
    },
    {
      id: 2,
      type: 'default',
      content: 'Scrum 中，引用「費氏數列」來評估「時間規模」，也就是每個數字只會是1、2、3、5、8、13、21這幾個數字，Point越小，代表這個Story花費時間越少；越大，就代表花費時間越多。',
    },
  ],
  button: '跟著DEV一起試試！',
  next: '/exam/sprint-point',
};

export default introductionSprintPoint;
