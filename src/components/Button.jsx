import clsx from 'clsx';
import { SpeechBubble } from './introduction';

export function Button({
  children, onClick, widthCss, mdWidthCss, isRabbit, speechText = null,
}) {
  return (
    <div className={clsx(
      'relative grid',
      widthCss,
      mdWidthCss,
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
        <SpeechBubble text={speechText} />
      </div>

    </div>

  );
}

export default Button;
