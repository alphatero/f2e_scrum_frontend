import clsx from 'clsx';

export function BlurBlockbBg(props) {
  const { children } = props;
  return (

    <div className={clsx(
      'w-full border border-gray-100 rounded-md',
      'bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10',
    )}
    >
      {children}
    </div>

  );
}

export default BlurBlockbBg;
