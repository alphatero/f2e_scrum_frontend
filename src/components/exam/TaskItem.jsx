import clsx from 'clsx';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants/dnd';

export function TaskItem({ task }) {
  // const { title, priority, point } = props;
  const {
    id, title, priority = null, point = null, seq,
  } = task;
  const mark = (priority || point);

  // 用 useDrag 定義拖曳行為: 陣列的第一個元素用於蒐集拖曳狀態的屬性
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASKITEM,
    item: () => ({ taskId: id, taskSeq: seq }),

    // 蒐集狀態
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // 如果物件正在被拖曳，則值為true
    }),
  });

  // 用 useDrop 定義拖放區
  const [, drop] = useDrop({
    accept: ItemTypes.TASKITEM,
    // 這裡可以取得拖曳物件的 item 屬性，就是在useDrag中設定的 item
    drop: (item) => {
      // 制定拖放後的動作
      console.log('Drop on todo', item); // eslint-disable-line no-console
    },
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>

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

      <div ref={drop} className="border border-zinc-600 h-20">
        {/* place here */}
      </div>
    </div>
  );
}

export default TaskItem;
