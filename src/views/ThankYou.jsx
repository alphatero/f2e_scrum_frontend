// import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components';
import { TextBubble } from '../components/home';
import { ThankInfo } from '../constants/thankInfo';
import { Icons } from '../components/Icons';

function ThankYou() {
  const navigate = useNavigate();
  const { speechBubble, bottomText, button } = ThankInfo;

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

  const backHome = () => {
    navigate('/');
  };

  return (
    <div className="relative flex items-center flex-col mx-auto h-full max-w-[375px]">

      <TextBubble
        classList="absolute top-12"
        data={speechBubble[0]}
        delaySec={4.5}
      />

      <TextBubble
        classList="absolute top-20"
        data={speechBubble[1]}
        delaySec={4.7}
      />

      <div className="absolute top-[28%] left-[50%] translate-x-[-50%] w-full">
        <div className="w-36 ml-4">
          <img src="/images/thank-slogan--i-know.png" alt="what is" />
        </div>
        <div className="flex items-end justify-center relative space-x-1">
          <Icons.HomeTitle.S className="mr-11 z-10" />

          <motion.div
            key="TitleC"
            initial="initial"
            animate="in"
            variants={homeVariants}
            transition={lastTransition}
            className="absolute z-0"
          >
            <Icons.HomeTitle.C />
          </motion.div>

          <motion.div
            animate={setThankJump().animate}
            transition={setThankJump(2.0).transition}
          >
            <Icons.HomeTitle.R className="-z-10" />
          </motion.div>

          <motion.div
            animate={setThankJump().animate}
            transition={setThankJump(2.2).transition}
          >
            <Icons.HomeTitle.U className="-z-10" />
          </motion.div>

          <motion.div
            animate={setThankJump().animate}
            transition={setThankJump(2.4).transition}
          >
            <Icons.HomeTitle.M className="-z-10" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -40, 0, -30, 0, -10, 0],
            }}
            transition={{
              delay: 2.4,
              duration: 1.0,
            }}
          >
            <Icons.HomeTitle.ExclamationMark className="z-10" />
          </motion.div>
        </div>
      </div>

      <TextBubble
        classList="absolute top-[40%]"
        data={speechBubble[2]}
        delaySec={5}
      />

      <TextBubble
        classList="absolute top-[50%]"
        data={speechBubble[3]}
        delaySec={5.3}
      />

      <div className="w-full mt-auto mb-5 px-4">
        <p className="pb-5">{bottomText}</p>
        <Button onClick={backHome}>{button}</Button>
      </div>

      <img
        className="fixed top-[-125px] left-[calc(50%-225px)] -z-10 animate-floating-a"
        src="/images/home-bg-img-S.png"
        alt="home-bg-img-S"
      />
      <img
        className="fixed top-[215px] right-[calc(50%-130px)] -z-10 animate-floating-b"
        src="/images/home-bg-img-C.png"
        alt="home-bg-img-C"
      />
      <img
        className="fixed bottom-[-50px] left-[calc(50%-25px)] -z-10 animate-floating-a"
        src="/images/home-bg-img-exclamation-mark.png"
        alt="home-bg-img-exclamation-mark"
      />
    </div>
  );
}

export default ThankYou;
