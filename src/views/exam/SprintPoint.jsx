import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { ExamSprintPointInfo } from '../../constants/examSprintPointInfo';

function ExamSprintPoint() {
  const navigate = useNavigate();
  const { tasks, button } = ExamSprintPointInfo;

  const backHome = () => {
    navigate('/');
  };

  return (
    <div className="p-4">

      <div className="border border-zinc-800 rounded-lg p-3 space-y-3">

        {tasks.map((task) => (
          <div className={clsx(
            'grid grid-cols-5 gap-2',
            'w-full p-3 rounded-lg',
            'bg-zinc-200',
          )}
          >
            <div className="col-span-4">
              <p>{task.content}</p>
            </div>
            <div className="text-right">
              <div className={clsx(
                'inline-block',
                'w-10 h-10 rounded-lg p-2',
                'bg-white text-center',
              )}
              >
                <span className="">{task.point}</span>

              </div>

            </div>
          </div>
        ))}

      </div>
      <div className="w-full h-5 text-center m-3">﹀ ﹀ ﹀</div>
      <p className="w-full h-5 text-right mb-1">優先度高</p>
      <div className={clsx(
        'border border-zinc-800 rounded-lg',
        'p-3 space-y-3 h-[30vh]',
      )}
      >
        {/* drag to here */}
      </div>
      <p className="w-full h-5 text-right mb-1">優先度低</p>
      <div className="w-full flex justify-center mt-10">
        <Button onClick={backHome}>{button}</Button>
      </div>

    </div>
  );
}

export default ExamSprintPoint;
