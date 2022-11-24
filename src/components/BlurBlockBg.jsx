import clsx from 'clsx';

export function BlurBlockBg(props) {
  const {
    children, className = 'backdrop-blur-md rounded-md p-3',
  } = props;
  return (

    <div className={clsx(
      'w-full border border-white',
      'bg-gradient-to-b from-white/70 to-white/30 bg-clip-padding bg-opacity-70',
      'backdrop-filter',
      className,
    )}
    >
      {children}
    </div>

  );
}

export default BlurBlockBg;
