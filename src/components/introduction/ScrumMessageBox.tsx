import clsx from 'clsx';

export function ScrumMessageBox() {
  return (
    <div className="-z-10 absolute flex w-full h-full">
      <div
        className={clsx(
          'w-full h-full rounded-3xl absolute',
          'border-2 border-primary border-opacity-70 bg-white',
        )}
      />
      <div
        className={clsx(
          'w-full h-full rounded-3xl',
          'translate-x-[2px] translate-y-[2px]',
          'bg-white blur-sm',
        )}
      />
    </div>
  );
}

export default ScrumMessageBox;
