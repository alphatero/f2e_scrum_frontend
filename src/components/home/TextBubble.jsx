import clsx from 'clsx';

export function TextBubble({ data, classList }) {
  const { id, content } = data;

  const renderHTML = (msg) => ({ __html: msg });

  const speechBubbleClassList = [
    'ml-6 mr-auto',
    'mr-6 ml-auto',
    'ml-5 mr-auto',
    'mr-5 ml-auto',
  ];

  return (
    <div className={clsx(
      speechBubbleClassList[id],
      classList,
      'relative py-2 px-5 rounded-3xl',
      'border border-solid border-white',
      'text-sm bg-white/50',
    )}
    >
      <span className="text-sm" dangerouslySetInnerHTML={renderHTML(content)} />
      <div className="absolute inset-0 blur-3xl" />
    </div>
  );
}

export default TextBubble;
