import clsx from 'clsx';
import { motion } from 'framer-motion';
import { SpeakingLoading } from './SpeakingLoading';

export function ChatLog({ data }) {
  const {
    character, content, time, submitBySelf,
  } = data;

  const switchMsg = (selfSubmit, text) => {
    if (selfSubmit && !text) {
      return <SpeakingLoading />;
    }

    if (selfSubmit) {
      return (
        <div
          key={text}
          className={clsx(
            'py-2 px-4 rounded-3xl',
            'bg-white text-sm text-slate-500 drop-shadow-md',
          )}
        >
          <p>{text}</p>
        </div>
      );
    }

    const itemMotion = {
      enter: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1 } },
      exit: { opacity: 0, x: -20 },
    };

    const mainMotion = {
      enter: {
        opacity: 1,
        transition: { staggerChildren: 0.5, delayChildren: 0.2 },
      },
      exit: {
        opacity: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    };

    return (
      <motion.ul
        className="flex flex-col space-y-2"
        variants={mainMotion}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        {text.map(
          (textItem) => (
            <motion.li
              variants={itemMotion}
              key={textItem.length}
              className={clsx(
                'py-2 px-4 rounded-3xl',
                'bg-teal-500 text-sm text-white drop-shadow-md',
              )}
            >
              <p>{textItem}</p>
            </motion.li>
          ),
        )}
      </motion.ul>
    );
  };

  return (
    <div
      className={clsx(
        'flex flex-row items-start gap-2',
        submitBySelf && 'flex-row-reverse',
      )}
    >

      {/* Avatar */}
      <div
        className={clsx(
          'flex-shrink-0 flex-grow-0',
          'w-8 h-8',
          'overflow-hidden rounded-full bg-gray-300',
        )}
      >
        <img
          className="object-cover object-center"
          src="#"
          alt="avatar alt"
        />
      </div>

      {/* Chat content */}
      <div className="flex flex-col gap-2 max-w-[60%]">

        {/* character title */}
        <p
          className={clsx(
            'inline-block self-start',
            'text-xs text-slate-700',
            submitBySelf && 'self-end',
          )}
        >
          { character }
        </p>

        {/* Chat msg */}
        {
          switchMsg(submitBySelf, content)
        }
      </div>

      {/* time */}
      <div className="mt-auto">
        <p className="text-xs text-slate-700">{ time }</p>
      </div>
    </div>
  );
}

export default ChatLog;
