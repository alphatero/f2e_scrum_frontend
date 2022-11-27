import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button, BlurBlockBg } from '../../components';
import { Tag, ScrumMessageBox } from '../../components/introduction';
import { introductionProductBacklog } from '../../constants/introductionProductBacklog';

export function IntroProductBacklog() {
  const {
    guide, tagText, article, remarks, image, button,
  } = introductionProductBacklog;
  const navigate = useNavigate();

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
            src="/images/introduction-product-backlog-rabbit.png"
            alt="guide"
          />
        </div>
      </div>
      <BlurBlockBg styleType="BlurBlockA">
        <div className={clsx('flex flex-col', 'justify-between items-center space-y-4 py-4')}>
          <article className="flex flex-col px-5">
            <div className="mt-6 mb-4">
              <Tag text={tagText} />
            </div>
            <p className="py-2">{article}</p>
            {remarks.map((remark) => (
              <p key={`title_${remark.id}`} className="font-bold text-lg">
                {remark.content}
              </p>
            ))}
          </article>

          <div>
            <img src={image.src} alt="圖片來源. 新加坡鈦坦科技-Scrum" />
            <a href={image.reference} className="text-teal-500 underline text-xs">
              圖片來源. 新加坡鈦坦科技-Scrum
            </a>
          </div>

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

export default IntroProductBacklog;
