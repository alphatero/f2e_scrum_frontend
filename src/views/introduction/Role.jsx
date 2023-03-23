import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button, ItemContainer, ItemChild } from 'components';
import { Api } from 'api/index';

const apiUrl = '/introduction/role';

export function Role() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [isOpenObj, setIsOpenObj] = useState({ card_0: true, card_1: false, card_2: false });

  const nextPage = () => {
    navigate('/introduction/sprint-guide');
  };
  const prevPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    Api.get(apiUrl).then((data) => setInfo(data));
  }, []);

  if (!Object.keys(info).length) return (<p>loading</p>);

  return (
    <div className="flex flex-col h-full p-4 pt-8">
      {
        info.cards.map((card, idx) => (
          <ItemContainer
            key={`card_${card.id}`}
            openState={isOpenObj[`card_${idx}`]}
            onClick={() => {
              setIsOpenObj({
                card_0: false,
                card_1: false,
                card_2: false,
                [`card_${idx}`]: true,
              });
            }}
          >
            <ItemChild
              key={`child_${card.id}`}
              card={card}
              openState={isOpenObj[`card_${idx}`]}
            />
          </ItemContainer>
        ))
      }

      <div className={clsx(
        'mx-auto mt-auto md:mb-11 w-full',
        'flex justify-center items-center flex-col gap-5',
      )}
      >
        <Button onClick={nextPage}>{info.button}</Button>
        <Button onClick={prevPage} btnType="secondary">回上頁</Button>
      </div>
    </div>

  );
}

export default Role;
