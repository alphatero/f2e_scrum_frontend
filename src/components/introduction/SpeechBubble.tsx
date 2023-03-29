import clsx from 'clsx';

type SpeechBubbleProps = {
  text: string;
};

export function SpeechBubble(props: SpeechBubbleProps) {
  const { text } = props;
  return (
    <div
      className={clsx(
        'shadow-inner-blur-5px shadow-teal-500/40 w-full border border-gray-100 rounded-3xl p-3',
        'bg-white',
      )}
    >
      {text}
    </div>
  );
}

export default SpeechBubble;
