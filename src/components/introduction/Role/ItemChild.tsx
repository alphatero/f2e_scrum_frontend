import clsx from 'clsx';
import { ItemHeaderTitle } from './ItemHeaderTitle';
import { ItemHeaderImg } from './ItemHeaderImg';

interface ClassOptObjType {
  default: string,
  close: string,
  open: string,
};

interface CardType {
  img: string,
  title: string,
  subtitle: string,
  introTitle: string,
  introBriefly: string,
  intro: string[],
};

interface ParamsType {
  card: CardType,
  openState: boolean
};

const classOpt: ClassOptObjType = {
  default: 'transition-all duration-700 origin-top overflow-hidden',
  close: 'h-0 opacity-0',
  open: 'h-100 opacity-1',
};

export function ItemChild({ card, openState }: ParamsType) {
  return (
    <>
      <div className={clsx('w-full flex', openState && 'mb-5')}>
        <ItemHeaderTitle
          card={card}
          classOpt={classOpt}
          openState={openState}
        />
        <ItemHeaderImg
          card={card}
          openState={openState}
        />
      </div>

      <div className={clsx(
        'w-full',
        classOpt.default,
        openState ? classOpt.open : classOpt.close,
      )}
      >
        {card.intro.map((part) => (
          <p
            key={part}
            className="mb-5 text-sm md:text-base text-slate-900"
          >
            {part}
          </p>
        ))}
      </div>
    </>
  );
}

export default ItemChild;
