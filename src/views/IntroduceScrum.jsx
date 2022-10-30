import React from 'react';
import { NavBar, Avatar } from '../components/introduceScrum';

function IntroduceScrum() {
  return (
    <div>
      <NavBar previousPage="Scrum 新手村專案" />
      <hr />
      <h3>IntroduceScrum is here</h3>
      <p>page content</p>
      <Avatar />
    </div>
  );
}

export default IntroduceScrum;
