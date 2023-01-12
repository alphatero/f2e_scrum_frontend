import clsx from 'clsx';

const category = {
  A: 'h-full rounded-t-3xl backdrop-blur-2xl',
  B: 'rounded-lg backdrop-blur-md',
  C: 'rounded-xl min-h-[320px] grid grid-col-4 relative',
};

export function BlurBlockBg(props) {
  const {
    children, type = 'A', className,
  } = props;

  return (
    <div className={clsx(
      'w-full max-w-5xl border border-white p-5 md:p-10 mx-auto',
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
