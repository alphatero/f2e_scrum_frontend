import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { ProductOwnerInfo } from '../../constants/productOwnerInfo';

function ProductOwner() {
  const navigate = useNavigate();
  const { cards, button } = ProductOwnerInfo;

  const backHome = () => {
    navigate('/');
  };

  const isOpen = [true, false, false];

  return (
    <div className="p-4">
      {
        cards.map((card, idx) => (isOpen[idx] ? (

          <div className={clsx(
            'grid grid-flow-row auto-rows-max',
            'border border-zinc-800 rounded-lg',
            'p-3 mb-5',
          )}
          >
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
                    className={clsx('absolute m-auto inset-0 top-[-40px]', 'w-40 h-52')}
                    alt={`${card.title}`}
                    src={`${card.img}`}
                  />
                </div>
              </div>

            </div>

            <div className="w-full">
              {card.intro.map((part) => (
                <p className="mb-5">
                  {part}
                </p>
              ))}
            </div>
          </div>

        ) : (

          <div className={clsx(
            'grid grid-flow-row auto-rows-max',
            'border border-zinc-800 rounded-lg',
            'p-3 mb-5',
          )}
          >
            <div className="w-full flex">

              <div className="flex-1">
                <h3 className="text-xl">{card.title}</h3>
                <h6>{card.subtitle}</h6>
              </div>
              <div className="flex-none">
                <div className="relative w-24">
                  <img className="absolute m-auto inset-0 top-[20px] h-20" alt={`${card.title}`} src={`${card.img}`} />
                </div>

              </div>
            </div>
          </div>

        )))
      }

      <div className="absolute bottom-10 w-[90vw] flex justify-center">
        <Button onClick={backHome}>{button}</Button>
      </div>
    </div>

  );
}

export default ProductOwner;
