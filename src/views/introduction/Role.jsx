import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, BlurBlockBg } from '../../components';
import { RoleInfo } from '../../constants/roleInfo';

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
  const defaultClass = 'transition-all duration-300 origin-top overflow-hidden';
  const closeClass = 'h-0 scale-y-0 opacity-0';
  const openClass = 'h-100 scale-y-1 opacity-1';
  return (
    <>
      <div className={clsx('w-full flex', openState && 'mb-5')}>
        <div className="flex-1">
          <h3 className="text-xl">{card.title}</h3>
          <h6 className={clsx(openState && 'mb-8')}>{card.subtitle}</h6>
          <div className={clsx(
            defaultClass,
            openState ? openClass : closeClass,
          )}
          >
            <h6>{card.introTitle}</h6>
            <p>{card.introBriefly}</p>
          </div>
        </div>
        <div className="flex-none">
          <div className={clsx('relative', openState ? 'w-40 h-40' : 'w-24')}>
            {
              openState && (
                <div className={clsx(
                  'absolute m-auto inset-0',
                  'border border-zinc-800',
                  'w-32 h-40',
                )}
                />
              )
            }
            <img
              className={clsx(
                'absolute m-auto inset-x-0 bottom-0',
                'transition duration-1000 ease-linear',
                openState ? 'w-40' : 'top-5 h-20',
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
          <p key={part} className="mb-5">
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

  const backHome = () => {
    navigate('/');
  };

  const [isOpenObj, setIsOpenObj] = useState({ card_0: true, card_1: false, card_2: false });

  return (
    <div className="p-4 mt-5">
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

      <div className="relative w-full flex justify-center">
        <Button onClick={backHome} className="w-full max-w-5xl">{button}</Button>
      </div>
      <div className="relative w-full flex justify-center mt-3">
        <Button onClick={backHome} className="w-full max-w-5xl" btnType="secondary">回上頁</Button>
      </div>
    </div>

  );
}

export default Role;
