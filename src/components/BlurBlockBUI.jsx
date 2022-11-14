import clsx from 'clsx';

export function BlurBlockBUI(props) {
  const { childrenUI } = props;
  return (

    <div className={clsx(
      'w-full border border-gray-100 rounded-md',
      'bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10',
    )}
    >
      {childrenUI}
    </div>

  );
}

export default BlurBlockBUI;
