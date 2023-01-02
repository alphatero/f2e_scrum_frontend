import clsx from 'clsx';

export function RoleItemHeaderTitle({ card, classOpt, openState }) {
  return (
    <div className="flex-1">
      <h3 className="text-sm md:text-base text-slate-900">{card.title}</h3>
      <h6 className={clsx(
        'text-xs md:text-sm text-slate-500',
        openState && 'mb-8',
      )}
      >
        {card.subtitle}
      </h6>
      <div className={clsx(
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

export default RoleItemHeaderTitle;
