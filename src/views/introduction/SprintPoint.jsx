import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button, BlurBlockBg } from '../../components';
import { Tag, ScrumMessageBox } from '../../components/introduction';
import { introductionSprintPoint } from '../../constants/introductionSprintPoint';

export function IntroSprintPoint() {
  const {
    guide, titles, tagText, articleTop, articleBottom, remarks, button,
  } = introductionSprintPoint;
  const navigate = useNavigate();

  const prevPage = () => {
    navigate('/exam/product-backlog');
  };

  const nextPage = () => {
    // to be continue
    navigate('/exam/sprint-point');
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
            className=""
            src="/images/introduction-sprint-point-rabbit.png"
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
          <article className="relative flex flex-col w-full">
            <div className="absolute right-3">
              <img
                className=""
                src="/images/logo-jira.png"
                alt="jira"
              />
            </div>
            {titles.map((title) => (
              <p key={`title_${title.id}`} className="font-bold text-lg">
                {title.content}
              </p>
            ))}
            <div className="mt-8">
              <Tag text={tagText} type="hint" />
            </div>
            <p className="pt-4 pb-5 text-sm md:text-base">{articleTop}</p>
            <div className="pl-3 border-l border-slate-700">
              {remarks.map((remark) => (
                <p key={`title_${remark.id}`} className="font-bold text-sm md:text-base">
                  {remark.content}
                </p>
              ))}
            </div>
            <p className="pt-4 pb-5 text-sm md:text-base">{articleBottom}</p>
          </article>

          <div className={clsx(
            'mx-auto w-full',
            'flex justify-center items-center flex-col gap-5',
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

export default IntroSprintPoint;
