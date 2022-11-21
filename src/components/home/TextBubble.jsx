import clsx from 'clsx';

export function TextBubble({ data }) {
  const { id, content } = data;

  const renderHTML = (msg) => ({ __html: msg });

  const speechBubbleClassList = [
    'ml-6',
    'mr-6',
    'ml-5',
    'mr-5',
  ];

  return (
    <div className={clsx(
      (id % 2) ? 'ml-auto' : 'mr-auto',
      speechBubbleClassList[id],
      'relative py-2 px-5 rounded-3xl',
      'border border-solid border-white',
      'bg-white/50',
    )}
    >
      <span className="text-sm" dangerouslySetInnerHTML={renderHTML(content)} />
      <div className="inset-0 blur-sm" />
    </div>
  );
}

export default TextBubble;
