import clsx from 'clsx';
import { SpeechBubble } from './introduction';
import { Button } from './Button';

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
      'relative flex-col w-full',
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

      <Button onClick={onClick} disabled={disabled}>{children}</Button>

      <img
        src="/images/rabbit-look-right.png"
        className="absolute left-0 bottom-0 -translate-x-2"
        alt=""
      />

    </div>

  );
}

export default ButtonRabbit;
