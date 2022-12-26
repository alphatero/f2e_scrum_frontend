import clsx from 'clsx';

export function Button(
  {
    children, onClick, className,
    maxWidthSetting = 'max-w-[358px]',
    btnType = 'primary', disabled = false,
  },
) {
  const btn = {
    primary: `
    text-white bg-teal-500 
    hover:bg-teal-400 
    active:bg-teal-600 
    disabled:bg-slate-300
    `,
    secondary: `
    bg-white
    border-2 border-teal-500 text-teal-500 
    hover:border-teal-400 hover:bg-teal-50 hover:text-teal-400 
    active:border-teal-600 active:text-teal-600 
    disabled:border-slate-300 disabled:text-slate-300
    `,
  };

  return (
    <div className={clsx(
      'relative grid w-full',
      maxWidthSetting,
      className,
    )}
    >
      <button
        type="button"
        className={clsx(
          'place-self-end justify-center',
          'w-full py-4 rounded-2xl',
          btn[btnType],
        )}
        onClick={onClick}
        disabled={disabled}
      >
        <p>{children}</p>
      </button>
    </div>

  );
}

export default Button;
