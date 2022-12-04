import { nanoid } from 'nanoid';

export const ExamSprintPointInfo = {
  type: 'point',
  title: 'Sprint point 實作',
  tasks: [
    {
      id: nanoid(),
      content:
        '會員系統(登入、註冊、權限管理)',
      priority: 8,
      seq: 1,
    },
    {
      id: nanoid(),
      content:
        '前台職缺列表(職缺詳細內容、點選可發送應徵意願)',
      priority: 5,
      seq: 2,
    },
    {
      id: nanoid(),
      content:
        '後台職缺管理(資訊上架、下架、顯示應徵者資料)',
      priority: 13,
      seq: 3,
    },
    {
      id: nanoid(),
      content:
        '應徵者的線上履歷編輯器',
      priority: 13,
      seq: 4,
    },
  ],
  button: '開始 Sprint ！',
  prev: '/introduction/sprint-point',
  next: '/chat/sprint-daily-scrum',
};

export default ExamSprintPointInfo;
