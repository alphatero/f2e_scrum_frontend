import { nanoid } from 'nanoid';

export const ExamProductBacklogInfo = {
  title: 'Sprint Backlog 實作',
  tasks: [
    {
      id: nanoid(),
      content:
        '會員系統(登入、註冊、權限管理)',
      priority: '優先度高',
      seq: 2,
    },
    {
      id: nanoid(),
      content:
        '前台職缺列表(職缺詳細內容、點選可發送應徵意願)',
      priority: '優先度中',
      seq: 3,
    },
    {
      id: nanoid(),
      content:
        '後台職缺管理(資訊上架、下架、顯示應徵者資料)',
      priority: '優先度低',
      seq: 4,
    },
    {
      id: nanoid(),
      content:
        '應徵者的線上履歷編輯器',
      priority: '優先度高',
      seq: 1,
    },
  ],
  button: '接下來要進入 Sprint 囉！',
};

export default ExamProductBacklogInfo;
