import PropTypes from 'prop-types';

function BeginMsg({ time, text }) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-sm text-gray-400">{ time }</p>
      { !!text && <p className="text-sm text-gray-400 max-w-[240px]">{text}</p> }
    </div>
  );
}

BeginMsg.propTypes = {
  time: PropTypes.string,
  text: PropTypes.string,
};

BeginMsg.defaultProps = {
  time: '上午9:30',
  text: null,
};

export default BeginMsg;
