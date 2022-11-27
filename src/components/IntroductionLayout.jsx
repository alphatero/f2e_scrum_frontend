// import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { BlurBlockBg } from './BlurBlockBg';
import {
  RoleTriangle,
  ScrumMessageBox,
  Tag,
} from './introduction';

export function IntroductionLayout({ info }) {
  const navigate = useNavigate();
  const {
    titles,
    article,
    button,
    sectionTitle,
    guide,
    image,
  } = info;

  const backHome = () => {
    navigate('/');
  };

  const nextPage = () => {
    // to be continue
  };

  return (
    <div className="flex flex-col pt-4">
      <div className="px-4 flex max-w-5xl mx-auto">
        <div className={clsx('relative', 'flex-1 flex items-center', 'mb-4')}>

          <ScrumMessageBox />

          <p className="text-xs mx-4">{guide}</p>
        </div>
        <div className="relative object-contain flex">
          <img
            className=""
            src="/images/introduction-scrum-rabbit.png"
            alt="guide"
          />
        </div>
      </div>
      <BlurBlockBg styleType="BlurBlockA">
        <div className={clsx('flex flex-col', 'justify-between items-center space-y-4 py-4')}>
          <article className="flex flex-col px-5">
            {titles.map((title) => (
              <p key={`title_${title.id}`} className="font-bold text-lg">
                {title.content}
              </p>
            ))}
            <div className="mt-6 mb-4">
              <Tag text={sectionTitle} />
            </div>
            {article.map((word) => (
              <p key={word} className="py-2">
                {word}
              </p>
            ))}
          </article>

          {
            image.type === 'img' ? (
              <div>
                <img src="/images/introduction-sprint-guide.png" alt="圖片來源. 新加坡鈦坦科技-Scrum" />
                <a href="/#" className="text-teal-500 underline text-xs">
                  圖片來源. 新加坡鈦坦科技-Scrum
                </a>
              </div>
            ) : <RoleTriangle />
          }

          <Button className="w-full" onClick={nextPage}>{button}</Button>

          <Button
            className="w-full"
            btnType="primary-outline"
            onClick={backHome}
          >
            回上頁
          </Button>
        </div>
      </BlurBlockBg>
    </div>
  );
}

export default IntroductionLayout;
