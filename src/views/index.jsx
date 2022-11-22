import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
// import { Button } from '../components';
import { TextBubble } from '../components/home';
import { HomeInfo } from '../constants/homeInfo';
import { Icons } from '../components/Icons';

function Home() {
  const navigate = useNavigate();
  const { speechBubble, button } = HomeInfo;
  // const { button } = HomeInfo;

  const backHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center flex-col h-full">

      <TextBubble classList="mt-14 animation-appear" data={speechBubble[0]} />

      <TextBubble classList="mt-8" data={speechBubble[1]} />

      <div className="w-full mt-2">
        <div className="w-24 ml-4">
          <img src="/images/home-slogan--what-is.png" alt="what is" />
        </div>
        <div className="flex items-end justify-center relative space-x-1">
          <Icons.HomeTitle.S className="shrink-0 mr-10" />
          <Icons.HomeTitle.C className="absolute rotate-[-40deg] translate-y-2 -translate-x-20" />
          <Icons.HomeTitle.R />
          <Icons.HomeTitle.U />
          <Icons.HomeTitle.M />
          <Icons.HomeTitle.QuestionMark className="rotate-[20deg] translate-y-1" />
        </div>
      </div>

      <TextBubble classList="mt-12" data={speechBubble[2]} />

      <TextBubble classList="mt-12" data={speechBubble[3]} />

      <div className="w-full mt-auto mb-5 px-4">
        <button
          type="button"
          onClick={backHome}
          className={clsx(
            'w-full block py-4 rounded-2xl',
            'bg-teal-500 hover:bg-teal-400 active:bg-teal-600 disabled:bg-slate-300',
          )}
        >
          { button }
        </button>
      </div>

      <img
        className="fixed top-[-20%] left-[-4%] -z-10 animate-floating"
        src="/images/home-bg-img-S.png"
        alt="home-bg-img-S"
      />
      <img
        className="fixed w-[80%] top-[33%] right-[-1%] -z-10 animate-floating"
        src="/images/home-bg-img-C.png"
        alt="home-bg-img-C"
      />
      <img
        className="fixed bottom-[-12%] right-[-5%] -z-10 animate-floating"
        src="/images/home-bg-img-question-mark.png"
        alt="home-bg-img-question-mark"
      />
    </div>
  );
}

export default Home;
