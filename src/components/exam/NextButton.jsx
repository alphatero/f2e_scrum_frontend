import clsx from 'clsx';

export function Button({ children, onClick }) {
  return (
    <div className="relative w-4/5 md:w-1/3 h-36 grid">

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

      <img src="/images/rabbit-look-right.png" className="absolute left-0 bottom-0" alt="" />

      <div className="absolute left-20 bottom-20 w-fit ">
        {/* TOTO: replace PR #24 Speech Bubble component */}
        <div className={clsx(
          'shadow-inner-blur-5px shadow-teal-500/40 w-full border border-gray-100 rounded-3xl p-3',
          'bg-white',
        )}
        >
          拖曳任務試試看吧！
        </div>
      </div>

    </div>

  );
}

export default Button;
