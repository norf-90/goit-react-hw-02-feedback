import PropTypes from 'prop-types';
import { GrDislike, GrLike } from 'react-icons/gr';
import { BsEmojiNeutralFill } from 'react-icons/bs';

const FeedbackOptions = ({
  onLeaveFeedback: { increaseGood, increaseBad, increaseNeutral },
}) => {
  return (
    <>
      <button onClick={increaseGood}>
        <GrDislike />
        <span>Good</span>
      </button>
      <button onClick={increaseNeutral}>
        <BsEmojiNeutralFill />
        <span>Neutral</span>
      </button>
      <button onClick={increaseBad}>
        <GrLike />
        <span>Bad</span>
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.shape({
    increaseGood: PropTypes.func,
    increaseBad: PropTypes.func,
    increaseNeutral: PropTypes.func,
  }),
};

export default FeedbackOptions;
