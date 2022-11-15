import clsx from 'clsx';

export function BlurBlockBg(props) {
  const { children } = props;
  return (

    <div className={clsx(
      'w-full border border-gray-100 rounded-md',
      'bg-gray-400 bg-clip-padding bg-opacity-10',
      'backdrop-filter backdrop-blur-md',
    )}
    >
      {children}
    </div>

  );
}

export default BlurBlockBg;
