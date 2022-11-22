import clsx from 'clsx';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../constants/dnd';

export function TaskItem({ task }) {
  // const { title, priority, point } = props;
  const {
    id: taskId, title, priority = null, point = null, seq: taskSeq,
  } = task;
  const mark = (priority || point);

  // 用useDrag定義拖曳行為: 陣列的第一個元素用於蒐集拖曳狀態的屬性
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASKITEM,
    item: () => ({ taskId, taskSeq }),

    // 蒐集狀態
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // 如果物件正在被拖曳，則值為true
    }),
  });

  return (
    <div ref={drag}>

      <div className={clsx(
        'grid grid-cols-4 gap-2',
        'w-full p-3 rounded-lg',
        'bg-teal-500 text-white',
        (isDragging ? 'bg-zinc-500' : null),
      )}
      >
        <div className="col-span-3 grid justify-items-start place-items-center">
          <div className="w-full text-left"><p>{title}</p></div>

        </div>
        <div className="grid justify-items-end place-items-center">
          <div className="text-right">
            <div className={clsx(
              'inline-block',
              'h-10 rounded-lg p-2',
              'bg-white text-zinc-600 text-center',
              (priority ? '' : 'w-10'),
            )}
            >
              <span>{mark}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default TaskItem;
