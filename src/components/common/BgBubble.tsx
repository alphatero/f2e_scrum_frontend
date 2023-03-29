import { motion } from 'framer-motion';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export function BgBubble({ children }: PropsWithChildren) {
  const bubbleStyleLists = [
    {
      id: 0,
      classList: [
        'w-[600px] h-[600px] left-[-12%]',
        'md:w-[800px] md:h-[800px]',
        'bg-teal-500 opacity-40 blur-2xl',
      ],
    },
    {
      id: 1,
      classList: ['w-64 h-64 left-0', 'md:w-72 md:h-72', 'bg-white blur-2xl'],
    },
    {
      id: 2,
      classList: ['w-64 h-64 -right-4', 'md:w-72 md:h-72', 'bg-white blur-2xl'],
    },
    {
      id: 3,
      classList: [
        'w-40 h-40 left-0',
        'md:w-52 md:h-52',
        'bg-yellow-300 opacity-60 blur-3xl',
      ],
    },
    {
      id: 4,
      classList: [
        'w-40 h-40 -right-8',
        'md:w-52 md:h-52',
        'bg-yellow-300 opacity-60 blur-3xl',
      ],
    },
  ];

  const animateSetting = {
    x: ['0vw', '-10vw', '-20vw', '-10vw', '0vw', '10vw', '20vw', '10vw', '0vw'],
    y: [
      '0vh',
      `${Math.floor(Math.random() * 20)}vh`,
      '30vh',
      `${Math.floor(Math.random() * 40)}vh`,
      '50vh',
      `${Math.floor(Math.random() * 40)}vh`,
      '30vh',
      `${Math.floor(Math.random() * 20)}vh`,
      '0vh',
    ],
  };

  return (
    <div className="fixed inset-0 bg-teal-50 -z-50">
      <ul className="fixed inset-0 max-w-[420px] mx-auto -z-10">
        {bubbleStyleLists.map((item) => (
          <motion.li
            className={clsx('absolute rounded-full', item.classList)}
            key={`bubbleLists-${item.id}`}
            animate={animateSetting}
            transition={{
              ease: 'easeInOut',
              type: 'tween',
              duration: 40,
              repeat: Infinity,
            }}
          />
        ))}
      </ul>
      {children}
    </div>
  );
}

export default BgBubble;
