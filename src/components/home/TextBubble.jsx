import clsx from 'clsx';
import { motion } from 'framer-motion';

export function TextBubble({
  key, content, classList, delaySec = 4,
}) {
  return (
    <motion.div
      key={key}
      className={clsx(
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
      <span className="text-sm">{content}</span>
      <div className="absolute inset-0 blur-3xl" />
    </motion.div>
  );
}

export default TextBubble;
