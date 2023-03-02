import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Icons } from '../common';

export function ChatNavBar({ previousPage }) {
  return (
    <div className={clsx(
      'flex flex-row items-center gap-3',
      'px-5 py-3',
      'bg-teal-500',
    )}
    >
      <Link to={previousPage}>
        <button
          type="button"
          className="w-2"
        >
          <Icons.ArrowLeft className="text-white" />
        </button>
      </Link>
      <p className="inline-block text-white text-xs md:text-sm">Scrum 新手村專案</p>
    </div>
  );
}

export default ChatNavBar;
