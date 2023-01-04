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
      <div className="relative px-4 flex max-w-5xl mx-auto">
        <div className={clsx('relative', 'flex-1 flex items-center', 'mb-4 mr-24 p-3')}>

          <ScrumMessageBox />
          <p className="mx-4 text-xs md:text-base">{guide}</p>
        </div>
        <div className="absolute right-0 bottom-0 object-contain flex">
          <img
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
            {
              next === '/exam/sprint-point'
            && (
            <div className="absolute right-3">
              <img
                src="/images/logo-jira.png"
                alt="jira"
              />
            </div>
            )
            }
            {titles.length > 0 && titles.map((title) => (
              <p key={`title_${title.id}`} className="font-bold text-lg md:text-2xl">
                {title.content}
              </p>
            ))}
            <div className="mt-6 mb-4">
              <Tag text={sectionTitle} type={sectionTitle === 'Hint!!' ? 'hint' : 'default'} />
            </div>
            {article.map((word) => (
              word.type === 'bold'
                ? word.content.map((content) => (
                  <p key={content} className="font-bold text-sm md:text-base">
                    { content}
                  </p>
                ))
                : (
                  <p key={word} className="py-2 text-sm md:text-base whitespace-pre-wrap">
                    {word.content}
                  </p>
                )
            ))}
          </article>

          {
            image
            && (image.type === 'img' ? (
              <div>
                <img src={image.src} alt="圖片來源. 新加坡鈦坦科技-Scrum" />
                <a href={image.reference} className="text-teal-500 underline text-xs">
                  圖片來源. 新加坡鈦坦科技-Scrum
                </a>
              </div>
            ) : <RoleTriangle />)
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
