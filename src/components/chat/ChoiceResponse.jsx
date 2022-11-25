import clsx from 'clsx';

export function ChoiceResponse({ caption, selectList, setChoiceMsg }) {
  return (
    <>
      <p className="text-xs text-slate-600">{ caption }</p>
      <ul className="flex flex-row gap-4 overflow-x-auto">
        {
          selectList.map((item) => (
            <li
              key={`selectList-${item.id}`}
            >
              <button
                className={clsx(
                  'shrink-0 py-2 px-4 rounded-3xl whitespace-nowrap',
                  'bg-teal-500 text-white text-sm cursor-pointer',
                  'hover:bg-teal-300 active:bg-teal-600',
                )}
                type="submit"
                onClick={() => setChoiceMsg(item.text)}
              >
                { item.text }
              </button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default ChoiceResponse;
