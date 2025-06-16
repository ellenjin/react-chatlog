import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.jsx';

const ChatLog = (props) => {
  const messageComponents = props.entries.map(message => {
    return (
      <ChatEntry className="chat-log"
        key={message.id}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        onLikeToggle={props.onLikeToggle}
      ></ChatEntry>
    );
  });

  return (
    <>
      {messageComponents}
    </>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      id: PropTypes.number,
      liked: PropTypes.bool
    })
  ).isRequired,
  onLikeToggle: PropTypes.func
};
export default ChatLog;