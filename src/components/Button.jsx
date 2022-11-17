import clsx from 'clsx';

export function Button({
  children, onClick, isRabbit, speechText = null,
}) {
  return (
    <div className={clsx(
      'relative w-4/5 md:w-1/3 grid',
      (isRabbit ? 'h-36' : ''),
    )}
    >

      <button
        type="button"
        className={clsx(
          'place-self-end justify-center',
          'w-full py-4 rounded-3xl',
          'bg-gray-300',
        )}
        onClick={onClick}
      >
        <p>{children}</p>
      </button>

      <img
        src="/images/rabbit-look-right.png"
        className={clsx(
          'absolute left-0 bottom-0',
          (!isRabbit ? 'hidden' : ''),
        )}
        alt=""
      />

      <div className={clsx(
        'absolute left-20 bottom-20 w-fit',
        (!speechText ? 'hidden' : ''),
      )}
      >
        {/* TOTO: replace PR #24 Speech Bubble component */}
        <div className={clsx(
          'shadow-inner-blur-5px shadow-teal-500/40 w-full border border-gray-100 rounded-3xl p-3',
          'bg-white',
        )}
        >
          {speechText}
        </div>
      </div>

    </div>

  // <button
  //   type="button"
  //   className={clsx(
  //     'flex justify-center ',
  //     'bg-gray-300',
  //     'py-4 w-3/4 md:w-1/3 rounded-3xl',
  //   )}
  //   onClick={onClick}
  // >
  //   <p>{children}</p>
  // </button>
  );
}

export default Button;
