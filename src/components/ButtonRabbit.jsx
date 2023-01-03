import { SpeechBubble } from './introduction';
import { Button } from './Button';

export function ButtonRabbit(
  {
    children, onClick,
    disabled = false,
    speechText = null,
  },
) {
  return (
    <div className="relative flex-col w-full max-w-[358px]">
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
        alt="What's scrum? What's product backlog? What's sprint point?"
      />

    </div>

  );
}

export default ButtonRabbit;
