import clsx from 'clsx';

export function TaskItem(props) {
  const { title, priority, point } = props;
  const mark = (priority || point);

  return (

    <div className={clsx(
      'grid grid-cols-4 gap-2',
      'w-full p-3 rounded-lg',
      'bg-teal-500 text-white',
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

  );
}

export default TaskItem;
