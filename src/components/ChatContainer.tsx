import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (text: string) => {
    const newUserMessage: Message = { text, isUser: true };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    // Simulate a response (optional)
    setTimeout(() => {
      const botResponse: Message = { text: `Echo: ${text}`, isUser: false };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 500);
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-md mx-auto border rounded-lg shadow-lg bg-white md:max-w-lg lg:max-w-xl">
      <div className="p-4 bg-blue-600 text-white text-xl font-semibold rounded-t-lg">
        Simple Chat
      </div>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
