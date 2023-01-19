import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components';
import { TextBubble } from '../components/home';
import { ThankInfo } from '../constants/thankInfo';
import { Icons } from '../components/Icons';

const { speechBubble, bottomText, button } = ThankInfo;
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

const homeVariants = {
  initial: {
    transition: { delayChildren: 2 },
    transform: 'translate(-66px, 10px) rotate(-44deg)',
  },
  in: {
    transform: [
      'translate(-66px, 10px) rotate(-44deg)',
      'translate(-62px, 10px) rotate(25deg)',
      'translate(-70px, 10px) rotate(-14deg)',
      'translate(-62px, 10px) rotate(15deg)',
      'translate(-70px, 10px) rotate(-4deg)',
      'translate(-62px, 10px) rotate(10deg)',
      'translate(-66px, 10px) rotate(0deg)',
    ],
  },
};

const lastTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 2,
};

const setThankJump = (delaySec) => {
  const setting = {
    animate: {
      y: [0, -15, 0],
    },
    transition: {
      delay: delaySec,
      duration: 0.5,
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
    transition: lastTransition,
    className: 'absolute z-0',
    IconHtml: <Icons.HomeTitle.C />,
  },
  {
    id: 1,
    animate: setThankJump().animate,
    transition: setThankJump(2.0).transition,
    IconHtml: <Icons.HomeTitle.R className="-z-10" />,
  },
  {
    id: 2,
    animate: setThankJump().animate,
    transition: setThankJump(2.2).transition,
    IconHtml: <Icons.HomeTitle.U className="-z-10" />,
  },
  {
    id: 3,
    animate: setThankJump().animate,
    transition: setThankJump(2.4).transition,
    IconHtml: <Icons.HomeTitle.M className="-z-10" />,
  },
  {
    id: 4,
    animate: {
      y: [0, -40, 0, -30, 0, -10, 0],
    },
    transition: {
      delay: 2.4,
      duration: 1.0,
    },
    IconHtml: <Icons.HomeTitle.ExclamationMark className="z-10" />,
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

function ThankYou() {
  const navigate = useNavigate();
  const backHome = () => {
    navigate('/');
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
        <div className="w-36 ml-4">
          <img src="/images/thank-slogan--i-know.png" alt="what is" />
        </div>
        <div className="flex items-end justify-center relative space-x-1">
          <Icons.HomeTitle.S className="mr-11 -z-10" />

          {
            letterArr.map((div) => (
              <motion.div
                key={div.key}
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

      <div className="w-full mt-auto mb-5 px-4">
        <p className="text-xs pb-5">{bottomText}</p>
        <Button onClick={backHome}>{button}</Button>
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

export default ThankYou;
