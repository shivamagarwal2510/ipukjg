import React from 'react';

interface MessageProps {
  text: string;
  isUser: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isUser }) => {
  const messageClasses = isUser
    ? 'bg-blue-500 text-white self-end rounded-br-none'
    : 'bg-gray-300 text-gray-800 self-start rounded-bl-none';

  return (
    <div className={`max-w-[70%] p-3 rounded-lg shadow-md mb-2 ${messageClasses}`}>
      <p className="break-words">{text}</p>
    </div>
  );
};

export default Message;
