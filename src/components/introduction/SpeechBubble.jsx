import clsx from 'clsx';

export function SpeechBubble(props) {
  const { text } = props;
  return (

    <div className={clsx(
      'shadow-inner shadow-teal-500 w-full border border-gray-100 rounded-md p-3',
      'bg-white',
    )}
    >
      {text}
    </div>

  );
}

export default SpeechBubble;
