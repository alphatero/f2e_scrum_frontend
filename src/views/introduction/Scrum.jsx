// import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  RoleTriangle,
  BlurBlockBg,
  ScrumMessageBox,
} from '../../components';
import { scrumInfo } from '../../constants/introduction';

export function Scrum() {
  const navigate = useNavigate();
  const {
    titles,
    article,
    button,
    sectionTitle,
    guide,
  } = scrumInfo;

  const backHome = () => {
    navigate('/');
  };

  const nextPage = () => {
    // to be continue
  };

  return (
    <div className="flex flex-col mt-4">
      <div className="px-4 flex">
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
      <BlurBlockBg>
        <div className={clsx('flex flex-col', 'justify-between items-center space-y-4 py-4')}>
          <article className="flex flex-col px-5">
            {titles.map((title) => (
              <p key={`title_${title.id}`} className="font-bold text-lg">
                {title.content}
              </p>
            ))}
            <div className="mt-6 mb-4">
              <div
                className={clsx(
                  'inline-block',
                  'py-2 px-3 -translate-x-5',
                  'text-white bg-primary rounded-r-full',
                )}
              >
                <p>{sectionTitle}</p>
              </div>
            </div>
            {article.map((word) => (
              <p key={`article_${word.id}`} className="py-2">
                {word.content}
              </p>
            ))}
          </article>

          <RoleTriangle />

          <Button className="bg-primary text-white" onClick={nextPage}>{button}</Button>

          <Button
            className="border border-primary text-primary"
            onClick={backHome}
          >
            回上頁
          </Button>
        </div>
      </BlurBlockBg>
    </div>
  );
}

export default Scrum;
