import clsx from 'clsx';
import { PropsWithChildren } from 'react';

const category = {
  A: 'h-full rounded-t-3xl backdrop-blur-2xl p-0 md:p-0',
  B: 'rounded-lg backdrop-blur-md p-5 md:p-10',
  C: 'rounded-xl min-h-[320px] grid grid-col-4 relative p-5 md:p-10',
};

export function BlurBlockBg(
  props: PropsWithChildren<{
    type?: keyof typeof category;
    className?: string;
  }>,
) {
  const { children, type = 'A', className } = props;

  return (
    <div
      className={clsx(
        'w-full max-w-5xl border border-white mx-auto',
        'bg-gradient-to-b from-white/70 to-white/30 bg-clip-padding bg-opacity-70',
        'backdrop-filter',
        className,
        category[type],
      )}
    >
      {children}
    </div>
  );
}

export default BlurBlockBg;
