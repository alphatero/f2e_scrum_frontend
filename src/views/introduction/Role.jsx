import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components'; // TODO: replace by Button with Rabbit compo
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
      {/* TODO: replace by BlurBlockBg compo */}
      <div className={clsx(
        'w-full border-2 border-white',
        'bg-gradient-to-b from-white/70 to-white/30 bg-clip-padding bg-opacity-70',
        'backdrop-filter',
        'p-3',
        'rounded-md',
        'backdrop-blur-md',
      )}
      >
        {children}
      </div>
    </div>
  );
}

function ChildOpen({ card }) {
  return (
    <div className="w-full">
      <div className="w-full mb-5 flex">
        <div className="flex-1">
          <h3 className="text-xl">{card.title}</h3>
          <h6 className="mb-8">{card.subtitle}</h6>
          <h6>{card.introTitle}</h6>
          <p>{card.introBriefly}</p>
        </div>
        <div className="flex-none">
          <div className="relative w-40 h-40">
            <div className={clsx(
              'absolute m-auto inset-0',
              'border border-zinc-800',
              'w-32 h-40',
            )}
            />
            <img
              className="absolute m-auto inset-x-0 bottom-0 w-40"
              alt={card.title}
              src={card.img}
            />
          </div>
        </div>

      </div>

      <div className="w-full">
        {card.intro.map((part) => (
          <p key={part} className="mb-5">
            {part}
          </p>
        ))}
      </div>
    </div>
  );
}

function ChildClose({ card, closeH }) {
  console.log(closeH); // eslint-disable-line no-console
  return (
    <div className="w-full flex" key={`childclose_${card.id}`}>

      <div className="flex-1">
        <h3 className="text-xl">{card.title}</h3>
        <h6>{card.subtitle}</h6>
      </div>
      <div className="flex-none">
        <div className="relative w-24">
          <img
            className={clsx(
              'absolute m-auto inset-x-0 bottom-0 top-5 h-20',
              'transition duration-1000 ease-linear',
              // closeH[`card_${card.id}`],
            )}
            alt={card.title}
            src={card.img}
          />
        </div>

      </div>
    </div>
  );
}

function Role() {
  const navigate = useNavigate();
  const { cards, button } = RoleInfo;

  const backHome = () => {
    navigate('/');
  };

  const [isOpenObj, setIsOpenObj] = useState({ card_0: true, card_1: false, card_2: false });

  return (
    <div className="p-4 mt-5">
      {
        cards.map((card, idx) => (isOpenObj[`card_${idx}`] ? (
          <Frame key={`card_${card.id}`}>
            <ChildOpen key={`child_${card.id}`} card={card} />
          </Frame>
        ) : (
          <Frame
            key={`card_${card.id}`}
            onClick={() => {
              console.log('onclick'); // eslint-disable-line no-console
              setIsOpenObj({
                card_0: false, card_1: false, card_2: false, [`card_${card.id}`]: true,
              });
            }}
          >
            <ChildClose key={`child_${card.id}`} card={card} />
          </Frame>
        )))
      }

      <div className="relative w-full flex justify-center">
        {/* TODO: replace by Button with Rabbit compon */}
        <Button onClick={backHome}>{button}</Button>
      </div>
    </div>

  );
}

export default Role;
