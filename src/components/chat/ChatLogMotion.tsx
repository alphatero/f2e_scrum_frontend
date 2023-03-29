import { motion } from 'framer-motion';
import { ChatLog } from './ChatLog';
import { MsgTypes } from '@/types';

const mainMotion = {
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
};

const itemMotion = {
  enter: { opacity: 1, x: 0, transition: { type: 'spring', duration: 2.5 } },
  exit: { opacity: 0, x: -20 },
};

const selfMotion = {
  enter: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1 } },
  exit: { opacity: 0, x: 20 },
};

type ChatLogMotionProps = {
  page: string;
  propsRef: (instance: Element | null) => void;
  currentChatLogData: MsgTypes[];
  lastMsg: MsgTypes | null;
};

export function ChatLogMotion({
  page,
  propsRef,
  currentChatLogData,
  lastMsg,
}: ChatLogMotionProps) {
  return (
    <motion.ul
      variants={mainMotion}
      initial="exit"
      animate="enter"
      exit="exit"
      className="flex flex-col space-y-2"
      ref={propsRef}
    >
      {[...currentChatLogData, lastMsg].map((item) => {
        if (!item) return null;

        const motionValue = item.character === '我' ? selfMotion : itemMotion;

        return (
          <motion.li key={page + item.id} variants={motionValue}>
            <ChatLog data={item} />
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export default ChatLogMotion;
