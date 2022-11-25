import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button, BlurBlockBg } from '../../components';
import { SpeechBubble, Tag } from '../../components/introduction';
import { IntroProductBacklogInfo } from '../../constants/introProductBacklog';

export function IntroProductBacklog() {
  const navigate = useNavigate();
  const {
    speech, tag, content, remarks, img, button,
  } = IntroProductBacklogInfo;

  const backHome = () => {
    navigate('/');
  };

  return (
    <div className="w-full h-screen flex-col">
      <div className="grid grid-cols-4 gap-3 px-4 pt-4">
        <div className="col-span-3 pb-7">
          <SpeechBubble text={speech} />

        </div>
        <div className="place-self-end">
          <img src={img.rabbitUrl} alt="" />
        </div>
      </div>
      <div className="w-full">

        <div className={clsx(
          'w-full border rounded-t-3xl',
        )}
        >
          <BlurBlockBg styleType="BlurBlockA">
            <div className="flex flex-col space-y-4">

              <Tag text={tag} className="mt-5 -translate-x-4 w-fit bg-amber-400" />

              <div className="p-4">
                {content}
              </div>

              <div className="p-4">
                {
                remarks.map((item) => (
                  <p key={`remark_${item.id}`} className="font-bold">{item.content}</p>
                ))
              }
              </div>

            </div>

          </BlurBlockBg>

        </div>
        <div className="flex flex-col">
          <img src={img.url} alt="" />
          <div className="px-4">
            <p>{img.attribution}</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 mt-4">
        <div className="flex justify-center">
          <Button btnType="primary" className="w-full">{button}</Button>
        </div>
        <div className="flex justify-center">
          <Button btnType="secondary" className="w-full" onClick={backHome}>回上頁</Button>
        </div>
      </div>

    </div>
  );
}

export default IntroProductBacklog;
