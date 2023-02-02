import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './index';
import { Icons } from './Icons';
import { TextBubble } from './home';

const setTransition = (delaySec) => ({
  delay: delaySec,
  duration: 1.0,
});

const rotateDeg = (rotateTime) => {
  const finalDeg = -44;
  return finalDeg + 360 * rotateTime;
};

const pageSetting = {
  home: {
    sZIndex: 'z-10',
    animate: {
      letter: {
        y: [0, -15, 0],
      },
      letterC: {
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
      },
      marker: {
        rotateZ: 20,
      },
    },
    transition: {
      letterC: {
        type: 'tween',
        ease: 'linear',
        duration: 4,
      },
      marker: {
        delay: 3.6,
        duration: 1.0,
      },
    },
    markerIcon: <Icons.HomeTitle.QuestionMark className="z-10" />,
  },
  thankyou: {
    sZIndex: '-z-10',
    animate: {
      letter: {
        rotateZ: [0, 20, 0],
      },
      letterC: {
        initial: {
          transition: { delayChildren: 2 },
          transform: 'translate(-66px, 10px) rotate(-44deg)',
        },
        in: {
          transform: [
            'translate(-82px, 10px) rotate(-44deg)',
            'translate(-78px, 10px) rotate(25deg)',
            'translate(-86px, 10px) rotate(-14deg)',
            'translate(-78px, 10px) rotate(15deg)',
            'translate(-86px, 10px) rotate(-4deg)',
            'translate(-78px, 10px) rotate(10deg)',
            'translate(-82px, 10px) rotate(0deg)',
          ],
        },
      },
      marker: {
        y: [0, -40, 0, -30, 0, -10, 0],
      },
    },
    transition: {
      letterC: {
        type: 'tween',
        ease: 'linear',
        duration: 2,
      },
      marker: {
        delay: 2.6,
        duration: 1.0,
      },
    },
    markerIcon: <Icons.HomeTitle.ExclamationMark className="z-10" />,
  },
};

const setAnimate = (page) => pageSetting[page].animate;

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
      IconHtml: <Icons.HomeTitle.S className={clsx('relative mr-11', pageSetting[page].sZIndex)} />,
    },
    {
      id: 1,
      key: 'C',
      initial: 'initial',
      animate: 'in',
      variants: pageSetting[page].animate.letterC,
      transition: pageSetting[page].transition.letterC,
      className: 'absolute z-0',
      IconHtml: <Icons.HomeTitle.C />,
    },
    {
      id: 2,
      key: 'R',
      animate: setAnimate(page).letter,
      transition: setTransition(2.0),
      IconHtml: <Icons.HomeTitle.R className="relative -z-10" />,
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
      transition: pageSetting[page].transition.marker,
      IconHtml: pageSetting[page].markerIcon,
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
        <div className="w-36 ml-4">
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
