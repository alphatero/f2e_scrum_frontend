import clsx from 'clsx';

export function Tag(props) {
  const { text, className } = props;
  return (

    <div className={clsx(
      'inline-block',
      'py-2 px-3 -translate-x-5',
      'text-white bg-primary rounded-r-full',
      className,
    )}
    >
      {text}
    </div>

  );
}

export default Tag;
