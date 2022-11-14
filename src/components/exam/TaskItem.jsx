import clsx from 'clsx';

export function TaskItem(props) {
  const { title, priority, point } = props;
  const markStyle = (priority ? '' : 'w-10');
  const mark = (priority || point);

  return (

    <div className={clsx(
      'grid grid-cols-4 gap-2',
      'w-full p-3 rounded-lg',
      'bg-teal-500 text-white',
    )}
    >
      <div className="col-span-3">
        <p>{title}</p>
      </div>
      <div>
        <div className="text-right">
          <div className={clsx(
            'inline-block',
            markStyle,
            'h-10 rounded-lg p-2',
            'bg-white text-zinc-600 text-center',
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
