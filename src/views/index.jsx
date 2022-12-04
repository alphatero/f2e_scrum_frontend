// import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components';
import { TextBubble } from '../components/home';
import { HomeInfo } from '../constants/homeInfo';
import { Icons } from '../components/Icons';

function Home() {
  const navigate = useNavigate();
  const { speechBubble, button } = HomeInfo;

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

  const nextPage = () => {
    navigate('/introduction/scrum');
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
        <div className="w-24 ml-4">
          <img src="/images/home-slogan--what-is.png" alt="what is" />
        </div>
        <div className="flex items-end justify-center relative space-x-1">
          <Icons.HomeTitle.S className="relative mr-11 z-10" />

          <motion.div
            key="TitleC"
            initial="initial"
            animate="in"
            variants={homeVariants}
            transition={homeTransition}
            className="absolute"
          >
            <Icons.HomeTitle.C className="relative z-0" />
          </motion.div>

          <motion.div
            animate={setHomeRotate().animate}
            transition={setHomeRotate(3.3).transition}
          >
            <Icons.HomeTitle.R className="relative -z-10" />
          </motion.div>

          <motion.div
            animate={setHomeRotate().animate}
            transition={setHomeRotate(3.4).transition}
          >
            <Icons.HomeTitle.U className="relative z-10" />
          </motion.div>

          <motion.div
            animate={setHomeRotate().animate}
            transition={setHomeRotate(3.5).transition}
          >
            <Icons.HomeTitle.M className="relative -z-10" />
          </motion.div>

          <motion.div
            animate={{
              rotateZ: 20,
            }}
            transition={{
              delay: 3.6,
              duration: 1.0,
            }}
          >
            <Icons.HomeTitle.QuestionMark className="relative z-10" />
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

      <div className="w-full mt-auto mx-auto mb-5 px-4">
        <Button onClick={nextPage}>{button}</Button>
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
        src="/images/home-bg-img-question-mark.png"
        alt="home-bg-img-question-mark"
      />
    </div>
  );
}

export default Home;
