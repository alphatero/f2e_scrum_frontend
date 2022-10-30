import React from 'react';
import { NavBar, BeginMsg, Avatar } from '../components/introduceScrum';

function IntroduceScrum() {
  const beginMsg = {
    time: '上午 9:30',
    text: 'Scrum Master 已邀請 PO, 工程師, 系統分析師, 我, Bossss 加入群組',
  };

  return (
    <div>
      <NavBar previousPage="Scrum 新手村專案" />
      <hr />
      <BeginMsg time={beginMsg.time} text={beginMsg.text} />
      <h3>IntroduceScrum is here</h3>
      <p>page content</p>
      <Avatar />
    </div>
  );
}

export default IntroduceScrum;
