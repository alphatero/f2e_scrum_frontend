import clsx from 'clsx';

export function RoleItemChild({ card, openState }) {
  const defaultClass = 'transition-all duration-700 origin-top overflow-hidden';
  const closeClass = 'h-0 opacity-0';
  const openClass = 'h-100 opacity-1';

  return (
    <>
      <div className={clsx('w-full flex', openState && 'mb-5')}>
        <div className="flex-1">
          <h3 className="text-sm md:text-base text-slate-900">{card.title}</h3>
          <h6 className={clsx('text-xs md:text-sm text-slate-500', openState && 'mb-8')}>{card.subtitle}</h6>
          <div className={clsx(
            defaultClass,
            openState ? openClass : closeClass,
          )}
          >
            <h6 className="text-xs md:text-sm text-slate-500">{card.introTitle}</h6>
            <p className="text-sm md:text-base text-slate-900 whitespace-pre-wrap">{card.introBriefly}</p>
          </div>
        </div>
        <div className="flex-none">
          <div className={clsx('relative', openState ? 'w-40 h-40' : 'w-24 md:w-28')}>
            {
              openState && (
                <div className={clsx(
                  'absolute m-auto inset-0',
                  'border border-zinc-800 bg-white',
                  'w-32 h-40',
                )}
                />
              )
            }
            <img
              className={clsx(
                'absolute m-auto inset-x-0 bottom-0',
                'transition duration-1000 ease-linear',
                'md:w-full md:h-auto',
                openState ? 'w-40' : 'top-4 h-20',
              )}
              alt={card.title}
              src={card.img}
            />
          </div>
        </div>

      </div>

      <div className={clsx(
        'w-full',
        defaultClass,
        openState ? openClass : closeClass,
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

export default RoleItemChild;
