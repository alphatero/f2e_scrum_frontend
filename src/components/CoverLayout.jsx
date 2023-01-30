import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './index';
import { Icons } from './Icons';
import { TextBubble } from './home';

const jumpAnimate = {
  letter: {
    y: [0, -15, 0],
  },
  marker: {
    y: [0, -40, 0, -30, 0, -10, 0],
  },
};
const rotateAnimate = {
  letter: {
    rotateZ: [0, 20, 0],
  },
  marker: {
    rotateZ: 20,
  },
};

const setTransition = (delaySec) => ({
  delay: delaySec,
  duration: 1.0,
});
const setAnimate = (page) => (page === 'home' ? rotateAnimate : jumpAnimate);

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

export function CoverLayout({ info }) {
  const {
    page,
    speechBubble,
    bottomText,
    button,
    next,
  } = info;

  const navigate = useNavigate();
  const nextPage = () => {
    navigate(next);
  };

  const letterArr = [
    {
      id: 0,
      key: 'S',
      IconHtml: <Icons.HomeTitle.S className="relative mr-11 z-10" />,
    },
    {
      id: 1,
      key: 'C',
      initial: 'initial',
      animate: 'in',
      variants: homeVariants,
      transition: lastTransition,
      className: 'absolute z-0',
      IconHtml: <Icons.HomeTitle.C />,
    },
    {
      id: 2,
      key: 'R',
      animate: setAnimate(page).letter,
      transition: setTransition(2.0),
      IconHtml: <Icons.HomeTitle.R className="-z-10" />,
    },
    {
      id: 3,
      key: 'U',
      animate: setAnimate(page).letter,
      transition: setTransition(2.2),
      IconHtml: <Icons.HomeTitle.U className="-z-10" />,
    },
    {
      id: 4,
      key: 'M',
      animate: setAnimate(page).letter,
      transition: setTransition(2.4),
      IconHtml: <Icons.HomeTitle.M className="-z-10" />,
    },
    {
      id: 5,
      animate: setAnimate(page).marker,
      transition: setTransition(2.4),
      IconHtml: <Icons.HomeTitle.ExclamationMark className="z-10" />,
    },
  ];

  const bubbleArr = [
    {
      class: 'absolute top-12',
      data: speechBubble[0],
      delay: 4.5,
    },
    {
      class: 'absolute top-20',
      data: speechBubble[1],
      delay: 4.7,
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
        {
          bottomText && (<p className="text-xs pb-5">{bottomText}</p>)
        }
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

export default CoverLayout;
