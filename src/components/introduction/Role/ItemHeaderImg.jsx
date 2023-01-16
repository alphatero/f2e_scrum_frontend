import clsx from 'clsx';

export function ItemHeaderImg({ card, openState }) {
  return (
    <div className="flex-none">
      <div className={clsx(
        'relative transition-all duration-300 ease-linear',
        openState ? 'w-40 h-40' : 'w-24 md:w-28',
      )}
      >
        <div className={clsx(
          openState || 'hidden',
          'absolute m-auto inset-0',
          'border border-zinc-800 bg-white',
          'w-32 h-40',
        )}
        />
        <img
          className={clsx(
            'absolute m-auto inset-x-0 bottom-0',
            'md:w-full md:h-auto',
            openState ? 'w-40' : 'top-4 h-20',
          )}
          alt={card.title}
          src={card.img}
        />
      </div>
    </div>
  );
}

export default ItemHeaderImg;
