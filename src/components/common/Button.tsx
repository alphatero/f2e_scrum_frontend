import clsx from 'clsx';

type BtnType = 'primary' | 'secondary';
type ClickType = () => void;

interface BtnObjType {
  primary: String,
  secondary: String
};

interface ParamsType {
  children: React.ReactNode, 
  onClick: ClickType, 
  className?: string,
  maxWidth?: string,
  btnType?: BtnType,
  disabled?: boolean,
};

const btn: BtnObjType = {
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

export function Button(
  {
    children, onClick, className,
    maxWidth = '358px',
    btnType = 'primary',
    disabled = false,
  }: ParamsType
) {
  return (
    <div className={clsx(
      'relative flex-col w-full',
      maxWidth === 'none' ? 'max-w-none' : `max-w-[${maxWidth}]`,
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
        {children}
      </button>
    </div>

  );
}

export default Button;
