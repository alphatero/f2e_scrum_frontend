import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { RoleItemContainer, RoleItemChild } from '../../components/introduction';
import { RoleInfo } from '../../constants/introductionRoleInfo';

export function Role() {
  const navigate = useNavigate();
  const [isOpenObj, setIsOpenObj] = useState({ card_0: true, card_1: false, card_2: false });
  const { cards, button } = RoleInfo;
  const nextPage = () => {
    navigate('/introduction/sprint-guide');
  };
  const prevPage = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col h-full p-4 pt-8">
      {
        cards.map((card, idx) => (
          <RoleItemContainer
            key={`card_${card.id}`}
            onClick={() => {
              setIsOpenObj({
                card_0: false, card_1: false, card_2: false, [`card_${card.id}`]: true,
              });
            }}
          >
            <RoleItemChild key={`child_${card.id}`} card={card} openState={isOpenObj[`card_${idx}`]} />
          </RoleItemContainer>
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
