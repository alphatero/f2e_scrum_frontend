import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { BlurBlockBg } from '../BlurBlockBg';
import { RoleTriangle } from './RoleTriangle';
import { ScrumMessageBox } from './ScrumMessageBox';
import { Tag } from './Tag';

export function IntroductionLayout({ info }) {
  const navigate = useNavigate();
  const {
    titles,
    article,
    button,
    sectionTitle,
    guide,
    image,
    next,
  } = info;

  const prevPage = () => {
    navigate(-1);
  };

  const nextPage = () => {
    navigate(next);
  };

  return (
    <div className="flex flex-col pt-4 h-full">
      <div className="px-4 flex max-w-5xl mx-auto">
        <div className={clsx('relative', 'flex-1 flex items-center', 'mb-4')}>

          <ScrumMessageBox />

          <p className="text-xs md:text-base mx-4">{guide}</p>
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
        <div className={clsx(
          'flex flex-col justify-between items-center',
          'h-full space-y-4 py-4',
        )}
        >
          <article className="flex flex-col w-full">
            {titles.map((title) => (
              <p key={`title_${title.id}`} className="font-bold text-lg md:text-2xl">
                {title.content}
              </p>
            ))}
            <div className="mt-6 mb-4">
              <Tag text={sectionTitle} />
            </div>
            {article.map((word) => (
              <p key={word} className="py-2 text-sm md:text-base">
                {word}
              </p>
            ))}
          </article>

          {
            image.type === 'img' ? (
              <div>
                <img src={image.src} alt="圖片來源. 新加坡鈦坦科技-Scrum" />
                <a href={image.reference} className="text-teal-500 underline text-xs">
                  圖片來源. 新加坡鈦坦科技-Scrum
                </a>
              </div>
            ) : <RoleTriangle />
          }

          <div className={clsx(
            'w-full flex-1',
            'flex flex-col justify-end items-center gap-5',
          )}
          >
            <Button onClick={nextPage}>{button}</Button>
            <Button onClick={prevPage} btnType="secondary">回上頁</Button>
          </div>
        </div>
      </BlurBlockBg>
    </div>
  );
}

export default IntroductionLayout;
