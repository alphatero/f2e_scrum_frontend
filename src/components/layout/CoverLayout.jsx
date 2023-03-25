import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Icons } from 'components/common';
import { TextBubble } from 'components/home';

const setTransition = (delaySec) => ({
  delay: delaySec,
  duration: 1.0,
});

const letterBgArr = [
  {
    class: 'fixed top-[-125px] left-[calc(50%-225px)] -z-10 animate-floating-a',
    path: '/images/home-bg-img-S.png',
    alt: 'home-bg-img-S',
    id: 0,
  },
  {
    class: 'fixed top-[215px] right-[calc(50%-130px)] -z-10 animate-floating-b',
    path: '/images/home-bg-img-C.png',
    alt: 'home-bg-img-C',
    id: 1,
  },
  {
    class: 'fixed bottom-[-50px] left-[calc(50%-25px)] -z-10 animate-floating-a',
    path: '/images/home-bg-img-question-mark.png',
    alt: 'home-bg-img-question-mark',
    id: 2,
  },
];

export function CoverLayout({ info, pageSetting }) {
  const {
    bubble,
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
      IconHtml: <Icons.HomeTitle.S className={clsx('relative mr-11', pageSetting.sZIndex)} />,
    },
    {
      id: 1,
      key: 'C',
      initial: 'initial',
      animate: 'in',
      variants: pageSetting.animate.letterC,
      transition: pageSetting.transition.letterC,
      className: 'absolute z-0',
      IconHtml: <Icons.HomeTitle.C />,
    },
    {
      id: 2,
      key: 'R',
      animate: pageSetting.animate.letter,
      transition: setTransition(2.0),
      IconHtml: <Icons.HomeTitle.R className="relative -z-10" />,
    },
    {
      id: 3,
      key: 'U',
      animate: pageSetting.animate.letter,
      transition: setTransition(2.2),
      IconHtml: <Icons.HomeTitle.U className="-z-10" />,
    },
    {
      id: 4,
      key: 'M',
      animate: pageSetting.animate.letter,
      transition: setTransition(2.4),
      IconHtml: <Icons.HomeTitle.M className="-z-10" />,
    },
    {
      id: 5,
      animate: pageSetting.animate.marker,
      transition: pageSetting.transition.marker,
      IconHtml: pageSetting.markerIcon,
    },
  ];

  const initialBubbleArr = [
    {
      class: 'absolute top-12 ml-6 mr-auto',
      content: '01',
      delay: 4.5,
      id: Infinity,
    },
    {
      class: 'absolute top-20 mr-6 ml-auto',
      content: '02',
      delay: 4.7,
      id: Infinity,
    },
    {
      class: 'absolute top-[40%] ml-5 mr-auto',
      content: '03',
      delay: 5,
      id: Infinity,
    },
    {
      class: 'absolute top-[50%] mr-5 ml-auto',
      content: '04',
      delay: 5.3,
      id: Infinity,
    },
  ];

  const [bubbleArr, setBubbleArr] = useState([]);

  useEffect(() => {
    if (bubble.length > 0) {
      const newBubbleArr = initialBubbleArr.map((item, index) => ({
        ...item,
        content: bubble[index].content,
        id: bubble[index].id,
      }));
      setBubbleArr(newBubbleArr);
    }
  }, [bubble]);

  return (
    <div className={clsx(
      'relative flex flex-col items-center',
      'mx-auto h-full max-w-[375px]',
    )}
    >
      {
        bubbleArr.map((item) => (
          <TextBubble
            key={item.id}
            classList={item.class}
            content={item.content}
            delaySec={item.delay}
          />
        ))
      }

      <div className="absolute top-[28%] left-[50%] translate-x-[-50%] w-full">
        <div className="w-36 ml-4">
          <img src="/images/home-slogan--what-is.png" alt="what is" />
        </div>
        <div className="flex items-end justify-center relative space-x-1">

          {
            letterArr.map((letterItem) => (
              <motion.div
                key={`letter-${letterItem.id}`}
                initial={letterItem.initial}
                animate={letterItem.animate}
                variants={letterItem.variants}
                transition={letterItem.transition}
                className={letterItem.className}
              >
                {letterItem.IconHtml}
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
            key={`letterImg-${item.id}`}
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
