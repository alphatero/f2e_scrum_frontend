import { CoverLayout } from '../components/CoverLayout';
import { HomeInfo } from '../constants/homeInfo';
import { Icons } from '../components/Icons';

const rotateDeg = (rotateTime) => {
  const finalDeg = -44;
  return finalDeg + 360 * rotateTime;
};

const setting = {
  page: 'home',
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
};

function Home() {
  return (
    <CoverLayout info={HomeInfo} pageSetting={setting} />
  );
}

export default Home;
