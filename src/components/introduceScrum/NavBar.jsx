import React from 'react';
import { LeftArrow } from '../icon';

function NavBar() {
  return (
    <div className="flex flex-row items-center gap-3 px-5 py-3">
      <div className="w-2">
        <LeftArrow />
      </div>
      <p className="inline-block">Scrum 新手村專案</p>
    </div>
  );
}

export default NavBar;
