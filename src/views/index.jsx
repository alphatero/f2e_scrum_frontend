import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { HomeInfo } from '../constants/homeInfo';

function Home() {
  const navigate = useNavigate();
  const { speechBubble, button } = HomeInfo;

  const backHome = () => {
    navigate('/');
  };

  return (

    <div className={clsx(
      'grid grid-flow-row auto-rows-max space-y-5',
      'h-screen w-full',
    )}
    >
      <div className="place-self-center justify-self-center">

        <div className={clsx(
          'w-fit h-fit border-4 border-white rounded-3xl py-2 px-5 mb-20',
          'bg-white bg-opacity-80',
        )}
        >
          {speechBubble[0].content}
        </div>
        <div className={clsx(
          'w-fit h-fit border-4 border-white rounded-3xl py-2 px-5 mb-10 ml-48',
          'bg-white bg-opacity-80',
        )}
        >
          {speechBubble[1].content}
        </div>
        <div className={clsx(
          'w-fit h-fit border-4 border-white rounded-3xl py-2 px-5 -ml-4',
          'bg-white bg-opacity-80',
        )}
        >
          {speechBubble[2].content}
        </div>

        <div className="text-8xl">Scrum？</div>

        <div className={clsx(
          'w-fit h-fit border-4 border-white rounded-3xl py-2 px-5 mt-20 -ml-4',
          'bg-white bg-opacity-80',
        )}
        >
          {speechBubble[3].content}
        </div>
        <div className={clsx(
          'w-fit h-fit border-4 border-white rounded-3xl py-2 px-5 mt-20 ml-32',
          'bg-white bg-opacity-80 text-center',
        )}
        >
          <div>{speechBubble[4].content}</div>
          <div>{speechBubble[5].content}</div>
        </div>

      </div>
      <div className={clsx(
        'grid justify-center',
        'w-full',
      )}
      >
        <Button onClick={backHome}>{button}</Button>
      </div>

    </div>
  );
}

export default Home;