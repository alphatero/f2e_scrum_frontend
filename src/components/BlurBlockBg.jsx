import clsx from 'clsx';

export function BlurBlockBg(props) {
  const {
    children, backdropBlur = 'backdrop-blur-md', rounded = 'rounded-md', padding = 'p-3',
  } = props;
  return (

    <div className={clsx(
      'w-full border border-white',
      'bg-gradient-to-b from-white/70 to-white/30 bg-clip-padding bg-opacity-70',
      'backdrop-filter',
      padding,
      rounded,
      backdropBlur,
    )}
    >
      {children}
    </div>

  );
}

export default BlurBlockBg;
