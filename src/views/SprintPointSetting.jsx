import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { sprintPointSettingInfo } from '../constants/sprintPointSettingInfo';

function SprintPointSetting() {
  const navigate = useNavigate();
  const { tasks, button } = sprintPointSettingInfo;

  const backHome = () => {
    navigate('/');
  };

  return (
    <div className="p-4">

      <div className="border border-zinc-800 rounded-lg px-3 pb-3">

        {tasks.map((task) => (
          <div className={clsx(
            'w-full',
            'grid grid-cols-4 gap-2',
            'rounded-lg',
            'bg-zinc-200',
            'p-3 mt-3',
          )}
          >
            <div className="col-span-3">{task.contant}</div>
            <div>
              <div className="rounded-lg p-1 bg-white text-center">{task.priority}</div>
            </div>
          </div>
        ))}

      </div>
      <div className="w-full h-5 text-center m-3">﹀ ﹀ ﹀</div>
      <div className="w-full h-5 text-right mb-1">優先度高</div>
      <div className="border border-zinc-800 rounded-lg p-3 h-[30vh]">
        {/* drag to here */}
      </div>
      <div className="w-full h-5 text-right mb-1">優先度低</div>
      <div className="w-full flex justify-center mt-10">
        <Button onClick={backHome}>{button}</Button>
      </div>

    </div>
  );
}

export default SprintPointSetting;
