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
    <div className={clsx({ 'p-4': true })}>

      <div className={clsx({ 'border border-zinc-800 rounded-lg px-3 pb-3': true })}>

        {tasks.map((task) => (
          <div className={clsx({ 'w-full grid grid-cols-4 gap-2 rounded-lg bg-zinc-200 p-3 mt-3': true })}>
            <div className={clsx({ 'col-span-3': true })}>{task.contant}</div>
            <div>
              <div className={clsx({ 'rounded-lg p-1 bg-white text-center': true })}>{task.priority}</div>
            </div>
          </div>
        ))}

      </div>
      <div className={clsx({ 'w-full h-5 text-center m-3': true })}>﹀ ﹀ ﹀</div>
      <div className={clsx({ 'w-full h-5 text-right mb-1': true })}>優先度高</div>
      <div className={clsx({ 'border border-zinc-800 rounded-lg p-3 h-[30vh]': true })}>
        {/* drag to here */}
      </div>
      <div className={clsx({ 'w-full h-5 text-right mb-1': true })}>優先度低</div>
      <div className={clsx({ 'w-full flex justify-center mt-10': true })}>
        <Button onClick={backHome}>{button}</Button>
      </div>

    </div>
  );
}

export default SprintPointSetting;
