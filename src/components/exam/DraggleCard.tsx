import { Draggable, DraggableStateSnapshot } from 'react-beautiful-dnd';
import clsx from 'clsx';

interface DraggleCardProps {
  item: {
    id: string | number;
    content: string;
    priority: string;
  };
  index: number;
  type: string;
}

export function DraggleCard({ item, index, type }: DraggleCardProps) {
  return (
    <Draggable draggableId={String(item.id)} index={index}>
      {(provided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          // snapshot={snapshot}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={clsx(
            'flex justify-between gap-2',
            'p-3',
            'rounded-lg bg-teal-500 text-white text-sm',
          )}
        >
          <div className="col-span-3">
            <p className="text-sm md:text-base">{item.content}</p>
          </div>
          <div className={clsx(type === 'point' && 'min-w-[30px]')}>
            <span
              className={clsx(
                'rounded-lg p-2 text-center whitespace-nowrap block',
                'bg-white text-slate-700 text-xs',
              )}
            >
              {item.priority}
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default DraggleCard;
