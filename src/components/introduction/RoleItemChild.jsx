import clsx from 'clsx';
import { RoleItemHeaderTitle } from './RoleItemHeaderTitle';
import { RoleItemHeaderImg } from './RoleItemHeaderImg';

export function RoleItemChild({ card, openState }) {
  const classOpt = {
    default: 'transition-all duration-700 origin-top overflow-hidden',
    close: 'h-0 opacity-0',
    open: 'h-100 opacity-1',
  };

  return (
    <>
      <div className={clsx('w-full flex', openState && 'mb-5')}>
        <RoleItemHeaderTitle
          card={card}
          classOpt={classOpt}
          openState={openState}
        />
        <RoleItemHeaderImg
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

export default RoleItemChild;
