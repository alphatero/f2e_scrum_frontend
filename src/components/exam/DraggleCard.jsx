/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
import { Draggable } from 'react-beautiful-dnd';
import clsx from 'clsx';

export function DraggleCard({ item, index }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          snapshot={snapshot}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={clsx(
            'flex justify-between',
            'p-3',
            'rounded-lg bg-primary text-white text-sm',
          )}
        >
          <div className="col-span-3">
            <p>{item.content}</p>
          </div>
          <div>
            <div>
              <span className={clsx('rounded-lg p-2 text-center whitespace-nowrap', 'bg-white text-slate-700 text-xs')}>{item.priority}</span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default DraggleCard;
