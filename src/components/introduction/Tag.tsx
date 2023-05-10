import clsx from 'clsx';

interface TagPropertyType {
  text: string,
  style: string
};
interface TagTransferType {
  [key: string]: TagPropertyType
};
interface ParamsType {
  className?: string,
  type: string
};

const tagType: TagTransferType = {
  hint: {
    text: 'Hint!!',
    style: 'text-slate-700 bg-yellow-300',
  },
  basic: {
    text: '基本概述',
    style: 'text-white bg-teal-500',
  },
};

export function Tag(props: ParamsType) {
  const { className, type = 'basic' } = props;

  return (

    <div className={clsx(
      'inline-block w-20 md:w-[88px]',
      'py-2 -translate-x-5 md:-translate-x-10',
      'text-sm md:text-base text-center rounded-r-full',
      tagType[type].style,
      className,
    )}
    >
      {tagType[type].text}
    </div>

  );
}

export default Tag;
