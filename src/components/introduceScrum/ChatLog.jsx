import PropTypes from 'prop-types';

function ChatLog({ character, content }) {
  return (
    <div className="flex flex-row items-start">

      {/* Avatar */}
      <div className="w-8 h-8 overflow-hidden rounded-full bg-gray-500">
        <img
          className="object-cover object-center"
          src="#"
          alt="avatar alt"
        />
      </div>

      {/* Chat content */}
      <div>

        {/* character title */}
        <p>{ character }</p>

        {/* Chat content */}
        {content.map((item) => <p>{item}</p>)}
      </div>
    </div>
  );
}

ChatLog.propTypes = {
  character: PropTypes.string,
  content: PropTypes.string,
};

ChatLog.defaultProps = {
  character: 'default character name',
  content: [
    'msg01',
    'msg02',
  ],
};

export default ChatLog;
