import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, BlurBlockBg } from '../../components';
import { RoleInfo } from '../../constants/introductionRoleInfo';

function Frame({ children, onClick }) {
  return (
    <div
      className={clsx(
        'grid grid-flow-row auto-rows-max',
        'rounded-lg mb-5',
      )}
      onClick={onClick}
      aria-hidden="true"
    >
      <BlurBlockBg styleType="BlurBlockB">{children}</BlurBlockBg>
    </div>
  );
}

function Child({ card, openState }) {
  const defaultClass = 'transition-all duration-700 origin-top overflow-hidden';
  const closeClass = 'h-0 opacity-0';
  const openClass = 'h-100 opacity-1';
  return (
    <>
      <div className={clsx('w-full flex', openState && 'mb-5')}>
        <div className="flex-1">
          <h3 className="text-sm text-slate-900">{card.title}</h3>
          <h6 className={clsx('text-xs text-slate-500', openState && 'mb-8')}>{card.subtitle}</h6>
          <div className={clsx(
            defaultClass,
            openState ? openClass : closeClass,
          )}
          >
            <h6 className="text-xs text-slate-500">{card.introTitle}</h6>
            <p className="text-sm text-slate-900 whitespace-pre-wrap">{card.introBriefly}</p>
          </div>
        </div>
        <div className="flex-none">
          <div className={clsx('relative', openState ? 'w-40 h-40' : 'w-24')}>
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
                openState ? 'w-40' : 'top-2 h-20',
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
          <p key={part} className="mb-5 text-sm text-slate-900">
            {part}
          </p>
        ))}
      </div>
    </>
  );
}

export function Role() {
  const navigate = useNavigate();
  const { cards, button } = RoleInfo;

  const nextPage = () => {
    navigate('/introduction/sprint-guide');
  };
  const prevPage = () => {
    navigate('/introduction/scrum');
  };

  const [isOpenObj, setIsOpenObj] = useState({ card_0: true, card_1: false, card_2: false });

  return (
    <div className="flex flex-col h-full p-4 pt-8">
      {
        cards.map((card, idx) => (
          <Frame
            key={`card_${card.id}`}
            onClick={() => {
              setIsOpenObj({
                card_0: false, card_1: false, card_2: false, [`card_${card.id}`]: true,
              });
            }}
          >
            <Child key={`child_${card.id}`} card={card} openState={isOpenObj[`card_${idx}`]} />
          </Frame>
        ))
      }

      <div className={clsx(
        'mx-auto mt-auto md:mb-11 w-full',
        'flex justify-center items-center flex-col gap-5',
      )}
      >
        <Button onClick={nextPage}>{button}</Button>
        <Button onClick={prevPage} btnType="secondary">回上頁</Button>
      </div>
    </div>

  );
}

export default Role;
