import clsx from 'clsx';
import { ItemHeaderTitle } from './ItemHeaderTitle';
import { ItemHeaderImg } from './ItemHeaderImg';

const classOpt = {
  default: 'transition-all duration-700 origin-top overflow-hidden',
  close: 'h-0 opacity-0',
  open: 'h-100 opacity-1',
};

interface ItemChildProps {
  card: {
    id: number;
    title: string;
    img: string;
    intro: string[];
  };
  openState: boolean;
}

export function ItemChild({ card, openState }: ItemChildProps) {
  return (
    <>
      <div className={clsx('w-full flex', openState && 'mb-5')}>
        <ItemHeaderTitle
          card={card}
          classOpt={classOpt}
          openState={openState}
        />
        <ItemHeaderImg card={card} openState={openState} />
      </div>

      <div
        className={clsx(
          'w-full',
          classOpt.default,
          openState ? classOpt.open : classOpt.close,
        )}
      >
        {card.intro.map((part) => (
          <p key={part} className="mb-5 text-sm md:text-base text-slate-900">
            {part}
          </p>
        ))}
      </div>
    </>
  );
}

export default ItemChild;
