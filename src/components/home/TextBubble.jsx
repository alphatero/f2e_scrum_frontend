import clsx from 'clsx';
import { motion } from 'framer-motion';

export function TextBubble({ data, classList, delaySec = 4 }) {
  const { id, content } = data;

  const renderHTML = (msg) => ({ __html: msg });

  const speechBubbleClassList = [
    'ml-6 mr-auto',
    'mr-6 ml-auto',
    'ml-5 mr-auto',
    'mr-5 ml-auto',
  ];

  return (
    <motion.div
      className={clsx(
        speechBubbleClassList[id],
        classList,
        'relative py-2 px-5 rounded-3xl',
        'border border-solid border-white',
        'text-sm bg-white/50',
      )}
      animate={{
        y: [35, 0],
        opacity: [0, 1],
      }}
      transition={{
        delay: delaySec,
        duration: 1,
      }}
    >
      <span className="text-sm" dangerouslySetInnerHTML={renderHTML(content)} />
      <div className="absolute inset-0 blur-3xl" />
    </motion.div>
  );
}

export default TextBubble;
