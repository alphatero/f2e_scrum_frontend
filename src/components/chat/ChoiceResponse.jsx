import clsx from 'clsx';

export function ChoiceResponse({ caption, selectList }) {
  return (
    <>
      <p className="text-xs text-slate-600">{ caption }</p>
      <ul className="flex flex-row gap-4 overflow-x-auto">
        {
          selectList.map((item) => (
            <li
              key={`selectList-${item.id}`}
              className={clsx(
                'shrink-0 py-2 px-4 rounded-3xl',
                'bg-teal-500 text-white text-sm cursor-pointer',
                'hover:bg-teal-300 active:bg-teal-600',
              )}
            >
              {item.text}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default ChoiceResponse;
