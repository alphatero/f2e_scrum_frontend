import { CoverLayout, Icons } from 'components';
import { useState, useEffect } from 'react';
import { Api } from 'api/base';

const setting = {
  page: 'home',
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
};

function ThankYou() {
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    Api.get('/thankyou').then((res) => {
      setPageContent({
        bubble: res.bubble,
        button: res.button,
        bottomText: res.bottomText,
        next: '/',
      });
    });
  }, []);
  if (Object.keys(pageContent).length > 0) {
    return (
      <CoverLayout info={pageContent} pageSetting={setting} />
    );
  }
  return <p>Loading...</p>;
}

export default ThankYou;
