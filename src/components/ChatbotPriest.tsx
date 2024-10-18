import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { analyzeDilemma } from '../services/api';

const ChatbotPriest: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'priest'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() && !loading) {
      setLoading(true);
      setMessages(prev => [...prev, { role: 'user', content: input }]);
      
      try {
        const response = await analyzeDilemma(input);
        setMessages(prev => [...prev, { role: 'priest', content: response }]);
      } catch (error) {
        console.error('Error analyzing dilemma:', error);
        setMessages(prev => [...prev, { role: 'priest', content: "Forgive me, my child, but I'm unable to provide guidance at this moment. Please try again later." }]);
      } finally {
        setLoading(false);
        setInput('');
      }
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-3/4 p-3 rounded-lg ${
              message.role === 'user' ? 'bg-purple-900 text-white' : 'bg-gray-800 text-gray-200'
            }`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-800">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-gray-900 text-white p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Seek spiritual guidance..."
            disabled={loading}
          />
          <button 
            onClick={handleSend} 
            className="bg-purple-700 p-3 rounded-r-lg transition-colors duration-300 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            disabled={loading}
          >
            {loading ? (
              <Send size={24} className="animate-pulse" />
            ) : (
              <Send size={24} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPriest;