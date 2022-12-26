import clsx from 'clsx';
import { SpeechBubble } from './introduction';

export function ButtonRabbit(
  {
    children, onClick,
    maxWidthSetting = 'max-w-[358px]',
    disabled = false,
    speechText = null,
  },
) {
  return (
    <div className={clsx(
      'relative grid w-full',
      maxWidthSetting,
    )}
    >
      {
        speechText && (
          <div className="w-fit mb-5 pl-16 text-xs text-slate-700">
            <SpeechBubble text={speechText} />
          </div>
        )
      }

      <button
        type="button"
        className={clsx(
          'place-self-end justify-center',
          'w-full py-4 rounded-2xl',
          'text-white bg-teal-500',
          'hover:bg-teal-400',
          'active:bg-teal-600',
          'disabled:bg-slate-300',
        )}
        onClick={onClick}
        disabled={disabled}
      >
        <p>{children}</p>
      </button>

      <img
        src="/images/rabbit-look-right.png"
        className="absolute left-0 bottom-0 -translate-x-2"
        alt=""
      />

    </div>

  );
}

export default ButtonRabbit;
