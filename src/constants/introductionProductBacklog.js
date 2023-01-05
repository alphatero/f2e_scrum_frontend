export const introductionProductBacklog = {
  guide:
    '我在scrum初期，會先與客戶及利益關係人討論需求，將需求以功能拆分放在product backlog，再依照需求的明確度、重要度高低以及規模大小區分',
  tag: 'hint',
  article: [
    {
      id: 0,
      type: 'default',
      content: '編排產品待辦清單的秘訣是：確保團隊在有限的時間與注意力內，集中在最重要的工作上，事項描述程度也依輕重緩急有所不同。',
    },
    {
      id: 1,
      type: 'bold',
      content: ['明確需求 > 模糊需求', '重要程度高 > 重要程度低', '當重要程度相當時，規模小 > 規模大'],
    },

  ],
  titles: [],
  image: {
    type: 'img',
    src: '/images/introduction-product-backlog.png',
    reference: 'https://titansoft.com/tw/agile_skills/to-do-list',
  },
  button: '跟著 PO 一起試試！',
  next: '/exam/product-backlog',
};

export default introductionProductBacklog;
