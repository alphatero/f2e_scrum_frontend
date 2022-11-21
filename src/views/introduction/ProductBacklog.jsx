import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
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
          {/* TODO: replace by speech bubble compo */}
          <div className={clsx(
            'shadow-inner-blur-5px shadow-teal-500/40 w-full border border-gray-100 rounded-3xl p-3',
            'bg-white',
          )}
          >
            {speech}
          </div>
        </div>
        <div className="place-self-end">
          {/* TODO: replace by rabbit compo */}
          <img src="https://source.unsplash.com/random/30×50" alt="" />
        </div>
      </div>
      <div className="w-full">
        {/* TODO: replace by BlurBlockBg compo */}
        <div className={clsx(
          'w-full border border-gray-100 rounded-md',
          'bg-gray-400 bg-clip-padding bg-opacity-10',
          'backdrop-filter backdrop-blur-md',
        )}
        >
          <div className="flex flex-col space-y-4">
            {/* TODO: replace by Tag compo */}
            <div className={clsx(
              'w-fit border rounded-r-3xl p-3',
              'text-white bg-amber-400',
            )}
            >
              {tag}
            </div>

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

        </div>
        <div className="flex flex-col">
          <img src={img.url} alt="" />
          <div className="px-4">
            <p>{img.attribution}</p>
          </div>
        </div>
      </div>
      {/* <div><img src="/images/introduction-role.png" alt="" /></div> */}
      <div className="space-y-4 mt-4">
        <div className="flex justify-center">
          <Button>{button}</Button>
        </div>
        <div className="flex justify-center">
          <Button onClick={backHome}>上一頁</Button>
        </div>
      </div>

    </div>
  );
}

export default IntroProductBacklog;
