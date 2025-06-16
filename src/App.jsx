import './App.css';
import ChatLog from './components/ChatLog.jsx';
import messagesData from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [messageData, setMessageData] = useState(messagesData);

  const toggleLiked = (messageId) => {
    const messages = messageData.map(message => {
      if (message.id === messageId) {
        return { ...message, liked: !message.liked };
      } else {
        return message; // message like status not changed
      }
    });
    setMessageData(messages);
  };
  const totalLikes = messageData.filter(message => message.liked).length;
  return (
    <div id="App">
      <header>
        <h1>React Chatlog</h1>
        <section id="heartWidget">{totalLikes} ❤️s</section>
      </header>
      <main>
        <ChatLog
          entries={messageData}
          onLikeToggle={toggleLiked}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
