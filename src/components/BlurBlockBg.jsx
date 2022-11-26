import clsx from 'clsx';

export function BlurBlockBg(props) {
  const {
    children, styleType = 'BlurBlockA', className,
  } = props;

  const type = {
    BlurBlockA: 'rounded-t-3xl backdrop-blur-2xl',
    BlurBlockB: 'rounded-lg backdrop-blur-md',
  };

  return (
    <div className={clsx(
      'w-full max-w-5xl border border-white p-3 mx-auto',
      'bg-gradient-to-b from-white/70 to-white/30 bg-clip-padding bg-opacity-70',
      'backdrop-filter',
      className,
      type[styleType],
    )}
    >
      {children}
    </div>

  );
}

export default BlurBlockBg;
