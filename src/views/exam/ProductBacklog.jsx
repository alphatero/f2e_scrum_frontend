import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { ExamProductBacklogInfo } from '../../constants/examProductBacklogInfo';

function ProductBacklog() {
  const navigate = useNavigate();
  const { tasks, button } = ExamProductBacklogInfo;

  const backHome = () => {
    navigate('/');
  };
  return (
    <div className="p-4">

      <div className="border border-zinc-800 rounded-lg p-3 space-y-3">
        {
          tasks.map((task) => (
            <div className={clsx(
              'grid grid-cols-4 gap-2',
              'w-full p-3',
              'rounded-lg bg-zinc-200',
            )}
            >
              <div className="col-span-3">
                <p>{task.content}</p>
              </div>
              <div>
                <div>
                  <span className="rounded-lg p-1 bg-white text-center">{task.priority}</span>
                </div>
              </div>
            </div>
          ))
        }

      </div>
      <div className="w-full h-5 text-center m-3">﹀ ﹀ ﹀</div>
      <p className="w-full h-5 text-right mb-1">優先度高</p>
      <div className={clsx('border border-zinc-800 rounded-lg', 'p-3 space-y-3 h-[30vh]')}>
        {/* drag to here */}
      </div>
      <p className="w-full h-5 text-right mb-1">優先度低</p>

      <div className="flex justify-center">
        <Button onClick={backHome}>{button}</Button>
      </div>

    </div>
  );
}

export default ProductBacklog;