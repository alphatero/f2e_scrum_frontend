import clsx from 'clsx';
import { Icons } from 'components/common';

export function ArrowDownCircle() {
  return (
    <div className={clsx(
      'shadow shadow-black/20 flex justify-center',
      'w-6 h-6 rounded-full',
      'bg-white text-slate-700',
      'lg:-rotate-90',
    )}
    >

      <Icons.ArrowDown className="place-self-center justify-self-center" />

    </div>

  );
}

export default ArrowDownCircle;
