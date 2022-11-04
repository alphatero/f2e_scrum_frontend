import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { RoleIntroInfo } from '../constants/roleIntroInfo';

function RoleIntro() {
  const navigate = useNavigate();
  const { cards, button } = RoleIntroInfo;

  const backHome = () => {
    navigate('/');
  };

  const isOpen = [true, false, false];

  return (
    <div className="p-4">
      {
        cards.map((card, idx) => (
          <div className={clsx(
            'grid grid-flow-row auto-rows-max',
            'border border-zinc-800 rounded-lg',
            'p-3 mb-5',
          )}
          >
            <div className={clsx('w-full', { 'mb-5': isOpen[idx] })}>

              <div className="float-right ml-3">
                <div className={clsx('relative', { 'w-40 h-40': isOpen[idx], 'w-24': !isOpen[idx] })}>
                  <div className={clsx('absolute m-auto inset-0', 'w-32 h-40', 'border border-zinc-800', { hidden: !isOpen[idx] })} />
                  <img
                    className={clsx('absolute m-auto inset-0', { 'top-[-40px] w-40 h-52': isOpen[idx], 'top-[20px] h-20': !isOpen[idx] })}
                    alt={`${card.title}`}
                    src={`${card.img}`}
                  />
                </div>
              </div>

              <h3 className="text-xl">{card.title}</h3>
              <h6 className={clsx({ 'mb-8': isOpen[idx] })}>{card.subtitle}</h6>
              <h6 className={clsx({ hidden: !isOpen[idx] })}>{card.introTitle}</h6>
              <p className={clsx({ hidden: !isOpen[idx] })}>{card.introBriefly}</p>

            </div>

            <div className={clsx('w-full', { hidden: !isOpen[idx] })}>
              {card.intro.map((part) => (
                <p className="mb-5">
                  {part}
                </p>
              ))}
            </div>

          </div>

        ))

      }

      <div className="w-full flex justify-center">
        <Button onClick={backHome}>{button}</Button>
      </div>
    </div>
  );
}

export default RoleIntro;
