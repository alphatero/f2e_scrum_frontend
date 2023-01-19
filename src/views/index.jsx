import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components';
import { TextBubble } from '../components/home';
import { HomeInfo } from '../constants/homeInfo';
import { Icons } from '../components/Icons';

const { speechBubble, button } = HomeInfo;

const bubbleArr = [
  {
    class: 'absolute top-12',
    data: speechBubble[0],
    delay: 4.5,
  },
  {
    class: 'absolute top-20',
    data: speechBubble[1],
    delay: '4.7',
  },
  {
    class: 'absolute top-[40%]',
    data: speechBubble[2],
    delay: 5,
  },
  {
    class: 'absolute top-[50%]',
    data: speechBubble[3],
    delay: 5.3,
  },
];

const rotateDeg = (rotateTime) => {
  const finalDeg = -44;
  return finalDeg + 360 * rotateTime;
};

const homeVariants = {
  initial: {
    transition: { delayChildren: 2 },
    transform: 'translate(400px, 10px) rotate(1440deg)',
  },
  in: {
    transform: [
      `translate(300px, 10px) rotate(${rotateDeg(4)}deg)`,
      `translate(200px, 10px) rotate(${rotateDeg(3)}deg)`,
      `translate(100px, 10px) rotate(${rotateDeg(2)}deg)`,
      `translate(0px, 10px) rotate(${rotateDeg(1)}deg)`,
      'translate(-82px, 10px) rotate(-54deg)',
      'translate(-76px, 10px) rotate(-38deg)',
      'translate(-78px, 10px) rotate(-44deg)',
    ],
  },
};

const homeTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 4,
};

const setHomeRotate = (delaySec = 3) => {
  const setting = {
    animate: {
      rotateZ: [0, 20, 0],
    },
    transition: {
      delay: delaySec,
      duration: 1.2,
    },
  };
  return setting;
};

const letterArr = [
  {
    id: 0,
    key: 'TitleC',
    initial: 'initial',
    animate: 'in',
    variants: homeVariants,
    transition: homeTransition,
    className: 'absolute',
    IconHtml: <Icons.HomeTitle.C className="relative z-0" />,
  },
  {
    id: 1,
    animate: setHomeRotate().animate,
    transition: setHomeRotate(3.3).transition,
    IconHtml: <Icons.HomeTitle.R className="relative -z-10" />,
  },
  {
    id: 2,
    animate: setHomeRotate().animate,
    transition: setHomeRotate(3.4).transition,
    IconHtml: <Icons.HomeTitle.U className="relative z-10" />,
  },
  {
    id: 3,
    animate: setHomeRotate().animate,
    transition: setHomeRotate(3.5).transition,
    IconHtml: <Icons.HomeTitle.M className="relative -z-10" />,
  },
  {
    id: 4,
    animate: {
      rotateZ: 20,
    },
    transition: {
      delay: 3.6,
      duration: 1.0,
    },
    IconHtml: <Icons.HomeTitle.QuestionMark className="relative z-10" />,
  },
];

const letterBgArr = [
  {
    class: 'fixed top-[-125px] left-[calc(50%-225px)] -z-10 animate-floating-a',
    path: '/images/home-bg-img-S.png',
    alt: 'home-bg-img-S',
  },
  {
    class: 'fixed top-[215px] right-[calc(50%-130px)] -z-10 animate-floating-b',
    path: '/images/home-bg-img-C.png',
    alt: 'home-bg-img-C',
  },
  {
    class: 'fixed bottom-[-50px] left-[calc(50%-25px)] -z-10 animate-floating-a',
    path: '/images/home-bg-img-question-mark.png',
    alt: 'home-bg-img-question-mark',
  },
];

function Home() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate('/introduction/scrum');
  };

  return (
    <div className={clsx(
      'relative flex flex-col items-center',
      'mx-auto h-full max-w-[375px]',
    )}
    >

      {
        bubbleArr.map((bubble) => (
          <TextBubble
            classList={bubble.class}
            data={bubble.data}
            delaySec={bubble.delay}
          />
        ))
      }

      <div className="absolute top-[28%] left-[50%] translate-x-[-50%] w-full">
        <div className="w-24 ml-4">
          <img src="/images/home-slogan--what-is.png" alt="what is" />
        </div>
        <div className="flex items-end justify-center relative space-x-1">
          <Icons.HomeTitle.S className="relative mr-11 z-10" />

          {
            letterArr.map((div) => (
              <motion.div
                key={div.id}
                initial={div.initial}
                animate={div.animate}
                variants={div.variants}
                transition={div.transition}
                className={div.className}
              >
                {div.IconHtml}
              </motion.div>
            ))
          }
        </div>
      </div>

      <div className="w-full mt-auto mx-auto mb-5 px-4">
        <Button onClick={nextPage}>{button}</Button>
      </div>

      {
        letterBgArr.map((item) => (
          <img
            className={item.class}
            src={item.path}
            alt={item.alt}
          />
        ))
      }
    </div>
  );
}

export default Home;
