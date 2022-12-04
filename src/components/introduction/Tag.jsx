import clsx from 'clsx';

export function Tag(props) {
  const { text, className, type = 'default' } = props;
  const tagStyle = {
    default: 'text-white bg-teal-500',
    hint: 'text-slate-700 bg-yellow-300',
  };
  return (

    <div className={clsx(
      'inline-block w-20 md:w-[88px]',
      'py-2 -translate-x-5 md:-translate-x-10',
      'text-sm md:text-base text-center rounded-r-full',
      tagStyle[type],
      className,
    )}
    >
      {text}
    </div>

  );
}

export default Tag;
