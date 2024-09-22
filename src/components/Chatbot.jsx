import React, { useState } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

const Chatbot = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return; // Prevent empty submissions

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput(''); // Clear input field

    // Prepare conversation history
    const conversationHistory = messages
      .map(msg => `${msg.sender}: ${msg.text}`)
      .join('\n') + `\n${userMessage.sender}: ${input}\n`;

    setIsLoading(true); // Set loading state to true

    const maxRetries = 3;
    let attempts = 0;

    while (attempts < maxRetries) {
      try {
        const response = await axios.post(
          'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
          { inputs: conversationHistory },
          {
            headers: {
              'Authorization': `Bearer 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`,
              'Content-Type': 'application/json',
            },
          }
        );

        const botMessage = {
          text: response.data[0]?.generated_text || "I'm not sure how to respond.",
          sender: 'bot'
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        break; // Exit loop on success
      } catch (error) {
        console.error("Error communicating with chatbot API:", error);

        if (error.response) {
          if (error.response.status === 429) {
            // Handle rate limiting
            attempts++;
            const waitTime = 1000 * Math.pow(2, attempts);
            console.log(`Rate limit hit. Retrying... attempt ${attempts} after ${waitTime}ms`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
          } else if (error.response.status === 503) {
            setMessages((prevMessages) => [
              ...prevMessages,
              { text: "Service is currently unavailable. Please try again later.", sender: 'bot' }
            ]);
            break;
          } else {
            setMessages((prevMessages) => [
              ...prevMessages,
              { text: "Error: Unable to communicate with the API.", sender: 'bot' }
            ]);
            break;
          }
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "Error: Unable to communicate with the API.", sender: 'bot' }
          ]);
          break;
        }
      }
    }

    if (messages.length === 0 || messages[messages.length - 1].sender === 'user') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "I'm having trouble right now. Would you like to try asking something else?", sender: 'bot' }
      ]);
    }

    setIsLoading(false); // Reset loading state
  };

  return (


    <div className="bg-gradient-to-r from-purple-900  to-blue-700 rounded-lg shadow-lg p-4 h-[70%] w-[85%] relative  bg-opacity-40 m-4 ">


      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        aria-label="Close"
      >
        <FaTimes />
      </button>
      <h2 className="text-xl font-semibold mb-2 text-white">Chatbot</h2>
      <div className="h-[80%] overflow-y-auto p-4 mb-4 bg-gray-800 rounded">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'}`}>
              <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
            </div>
          </div>
        ))}
        {isLoading && <p className="text-gray-300">Bot is typing...</p>}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full text-black mt-2 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type a message..."
          disabled={isLoading} // Disable input while loading
        />
        <button type="submit" className="p-2 mt-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition" disabled={isLoading}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
