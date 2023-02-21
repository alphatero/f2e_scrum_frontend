import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { ItemContainer, ItemChild } from '../../components/introduction/Role';
import { fetchContent, verifyKeyIsMatch } from '../../api';
// import { RoleInfo } from '../../constants/introductionRoleInfo';

export function Role() {
  const [fetchState, setFetchState] = useState(false);
  const navigate = useNavigate();
  const [isOpenObj, setIsOpenObj] = useState({ card_0: true, card_1: false, card_2: false });
  const [pageContent, setPageContent] = useState({});
  const nextPage = () => {
    navigate('/introduction/sprint-guide');
  };
  const prevPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchContent('/introduction/role')
      .then((resultData) => {
        const responseCardKeys = ['id', 'img', 'intro', 'introBriefly', 'introTitle', 'priority', 'subtitle', 'title'];
        const verifyData = resultData.cards[0];

        if (verifyKeyIsMatch(responseCardKeys, verifyData)) {
          setFetchState(true);
          setPageContent(resultData);
        } else {
          setFetchState(false);
        }
      });
  }, []);

  if (fetchState) {
    return (
      <div className="flex flex-col h-full p-4 pt-8">
        {
          pageContent.cards && pageContent.cards.map((card, idx) => (
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
          <Button onClick={nextPage}>{pageContent.button}</Button>
          <Button onClick={prevPage} btnType="secondary">回上頁</Button>
        </div>
      </div>

    );
  }
  return (
    <h2>loading...</h2>
  );
}

export default Role;
