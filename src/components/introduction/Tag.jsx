import clsx from 'clsx';

export function Tag(props) {
  const { text, bgClass } = props;
  return (

    <div className={clsx(
      'w-fit border rounded-r-3xl p-3',
      'text-white',
      bgClass,
    )}
    >
      {text}
    </div>

  );
}

export default Tag;
