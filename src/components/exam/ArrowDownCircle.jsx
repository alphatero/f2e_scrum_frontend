import clsx from 'clsx';
import { Icons } from '../Icons';

export function ArrowDownCircle() {
  return (
    <div className={clsx(
      'inline-block shadow shadow-black/20',
      'w-10 h-10 rounded-full',
      'bg-white text-slate-700',

    )}
    >
      <div className="grid w-full h-full">
        <Icons.ArrowDown className="place-self-center justify-self-center" />
      </div>
    </div>

  );
}

export default ArrowDownCircle;
