import clsx from 'clsx';

type Props = {
  time: string;
  text?: string;
};

export function BeginMsg({ time, text }: Props) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center',
        'text-center text-xs md:text-sm text-slate-700',
      )}
    >
      <p>{time}</p>
      {!!text && <p className="max-w-[240px]">{text}</p>}
    </div>
  );
}

export default BeginMsg;
