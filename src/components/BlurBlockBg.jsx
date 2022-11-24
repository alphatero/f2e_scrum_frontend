import clsx from 'clsx';

export function BlurBlockBg(props) {
  const { children } = props;
  return (

    <div className={clsx(
      'w-full border-2 border-gray-100 rounded-t-2xl',
      'bg-white/60 bg-clip-padding bg-opacity-10',
      'backdrop-filter backdrop-blur-md',
    )}
    >
      {children}
    </div>

  );
}

export default BlurBlockBg;
