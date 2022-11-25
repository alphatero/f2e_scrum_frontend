import clsx from 'clsx';

export function BgBubble({ children }) {
  const bubbleStyleLists = [
    {
      id: 0,
      classList: [
        'w-[600px] h-[600px] left-[-12%] top-[3%]',
        'bg-teal-500 opacity-40 blur-2xl',
      ],
    },
    {
      id: 1,
      classList: [
        'w-64 h-64 left-0 top-[18%]',
        'bg-white blur-2xl',
      ],
    },
    {
      id: 2,
      classList: [
        'w-64 h-64 -right-4 top-[30%]',
        'bg-white blur-2xl',
      ],
    },
    {
      id: 3,
      classList: [
        'w-40 h-40 left-0 top-[14%]',
        'bg-yellow-300 opacity-60 blur-3xl',
      ],
    },
    {
      id: 4,
      classList: [
        'w-40 h-40 -right-8 top-[44%]',
        'bg-yellow-300 opacity-60 blur-3xl',
      ],
    },
  ];

  return (
    <>
      <ul className="fixed inset-0 -z-10">
        {
          bubbleStyleLists.map((item) => (
            <li
              className={clsx(
                // 'absolute rounded-full animate-bloop',
                'absolute rounded-full',
                item.classList,
              )}
              key={`bubbleLists-${item.id}`}
            />
          ))
        }
      </ul>
      { children }
    </>
  );
}

export default BgBubble;
