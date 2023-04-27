import { CardTypes } from 'types';
import clsx from 'clsx';

interface ItemHeaderTitleProps {
  card: CardTypes;
  classOpt: {
    default: string;
    open: string;
    close: string;
  };
  openState: boolean;
}

export function ItemHeaderTitle({
  card,
  classOpt,
  openState,
}: ItemHeaderTitleProps) {
  return (
    <div className="flex-1">
      <h3 className="text-sm md:text-base text-slate-900">{card.title}</h3>
      <h6
        className={clsx(
          'text-xs md:text-sm text-slate-500',
          openState && 'mb-8',
        )}
      >
        {card.subtitle}
      </h6>
      <div
        className={clsx(
          classOpt.default,
          openState ? classOpt.open : classOpt.close,
        )}
      >
        <h6 className="text-xs md:text-sm text-slate-500">{card.introTitle}</h6>
        <p className="text-sm md:text-base text-slate-900 whitespace-pre-wrap">
          {card.introBriefly}
        </p>
      </div>
    </div>
  );
}

export default ItemHeaderTitle;
