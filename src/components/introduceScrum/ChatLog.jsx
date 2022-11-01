import clsx from 'clsx';
import PropTypes from 'prop-types';

function ChatLog({
  character, content, time, reverse,
}) {
  return (
    <div className={
        clsx('flex flex-row items-start gap-2 pr-4', reverse && 'flex-row-reverse')
      }
    >

      {/* Avatar */}
      <div className="flex-shrink-0 flex-grow-0 w-8 h-8 overflow-hidden rounded-full bg-gray-300">
        <img
          className="object-cover object-center"
          src="#"
          alt="avatar alt"
        />
      </div>

      {/* Chat content */}
      <div className="flex flex-col gap-2 max-w-[60%]">

        {/* character title */}
        <p className={clsx('inline-block self-start text-xs text-gray-500', reverse && 'self-end')}>{ character }</p>

        {/* Chat content */}
        {content.map((item) => <p className="p-2 rounded-3xl bg-gray-300">{item}</p>)}
      </div>

      {/* time */}
      <div className="mt-auto">
        <p className="text-xs text-gray-500">{ time }</p>
      </div>
    </div>
  );
}

ChatLog.propTypes = {
  character: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.string,
  reverse: PropTypes.bool,
};

ChatLog.defaultProps = {
  character: 'default character name',
  content: [
    'msg01',
    'msg02',
  ],
  time: '',
  reverse: false,
};

export default ChatLog;
