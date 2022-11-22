import clsx from 'clsx';
import { SpeechBubble } from './introduction';

export function Button(
  {
    children, onClick, widthClass,
    btnType = 'primary', disabled = false, isRabbit = false,
    speechText = null,
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
    border border-teal-500 text-teal-500 
    hover:border-teal-400 hover:bg-teal-50 hover:text-teal-400 
    active:border-teal-600 active:text-teal-600 
    disabled:border-slate-300 disabled:text-slate-300
    `,
  };

  return (
    <div className={clsx(
      'relative grid',
      widthClass,
      (isRabbit ? 'min-h-36' : ''),
    )}
    >
      {
        speechText && (
          <div className="w-fit mb-5 pl-16">
            <SpeechBubble text={speechText} />
          </div>
        )
      }

      <button
        type="button"
        className={clsx(
          'place-self-end justify-center',
          'w-full py-4 rounded-3xl',
          btn[btnType],
        )}
        onClick={onClick}
        disabled={disabled}
      >
        <p>{children}</p>
      </button>

      {
        isRabbit && (
        <img
          src="/images/rabbit-look-right.png"
          className="absolute left-0 bottom-0"
          alt=""
        />
        )
      }

    </div>

  );
}

export default Button;
