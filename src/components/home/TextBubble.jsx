import clsx from 'clsx';
import { motion } from 'framer-motion';

export function TextBubble({
  id, content, classList, delaySec = 4,
}) {
  return (
    <motion.div
      key={id}
      className={clsx(
        classList,
        content.length > 0 && 'flex flex-col',
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
      {
        typeof content !== 'string' && content.length > 0 ? (
          content.map((item) => (
            <span
              key={`${content.id}-${item}`}
              className="text-sm"
            >
              {item}
            </span>
          ))
        ) : (
          <span className="text-sm">{content}</span>
        )
      }
      <div className="absolute inset-0 blur-3xl" />
    </motion.div>
  );
}

export default TextBubble;
