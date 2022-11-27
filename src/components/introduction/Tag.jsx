import clsx from 'clsx';

export function Tag(props) {
  const { text, className, type = 'default' } = props;
  const tagStyle = {
    default: 'text-white bg-teal-500',
    hint: 'text-slate-700 bg-yellow-300',
  };
  return (

    <div className={clsx(
      'inline-block',
      'py-2 px-3 -translate-x-8',
      'text-white rounded-r-full',
      tagStyle[type],
      className,
    )}
    >
      {text}
    </div>

  );
}

export default Tag;
