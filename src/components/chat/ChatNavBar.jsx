import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../Icons';

export function ChatNavBar({ previousPage }) {
  const navigate = useNavigate();
  const goBack = () => {
    const preRoute = '/';
    navigate(preRoute);
  };
  return (
    <div className={clsx(
      'flex flex-row items-center gap-3',
      'px-5 py-3',
      'bg-teal-500',
    )}
    >
      <button
        type="button"
        className="w-2"
        onClick={goBack}
      >
        <Icons.ArrowLeft className="text-white" />
      </button>
      <p className="inline-block text-white text-xs">{ previousPage }</p>
    </div>
  );
}

export default ChatNavBar;
