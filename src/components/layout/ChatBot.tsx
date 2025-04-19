import React, { useState } from 'react';
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/solid';

type Message = {
  sender: 'user' | 'ai';
  text: string;
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initialMessages: Message[] = [
    { sender: 'ai' as const, text: 'Hi there! Select one of the questions below to get your answer.' },
  ];
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNewChat = () => {
    setMessages(initialMessages);
    setInput('');
    setError(null);
    setLoading(false);
  };
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    setError(null);
    const userMessage = { sender: 'user' as const, text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('https://hyperscriber-ai.up.railway.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text }),
      });
      if (!res.ok) throw new Error('Server error');
      const data = await res.json();
      setMessages((msgs) => [...msgs, { sender: 'ai', text: data.reply || 'No response from AI.' }]);
    } catch (err: any) {
      console.error('ChatBot fetch error:', err);
      setMessages((msgs) => [...msgs, { sender: 'ai', text: 'Sorry, there was an error connecting to the AI server.' }]);
      setError('Failed to connect to AI server.');
    } finally {
      setLoading(false);
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !loading) {
      sendMessage();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  return (
    <>
      
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-200 z-50 border-2 border-white/40 backdrop-blur md:block hidden"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
        )}
      </button>

      
      {isOpen && (
        <div
          className="fixed bottom-32 right-12 w-[28rem] max-w-[90vw] h-[34rem] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-white/40 backdrop-blur-lg flex flex-col z-40 animate-fade-in md:flex hidden"
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)', backdropFilter: 'blur(12px)' }}
        >
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center gap-3 shadow-sm">
            
            <div className="bg-white/30 rounded-full p-1 flex items-center justify-center h-10 w-10 border border-white/40">
              <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-blue-100" />
            </div>
            <h3 className="font-bold text-lg flex-1 tracking-wide">AI Assistant</h3>
            <button
              onClick={handleNewChat}
              className="bg-white/20 border border-white/40 text-white px-3 py-1 rounded-lg ml-2 shadow hover:bg-blue-500/40 transition-colors duration-150 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
              style={{marginRight: '0.5rem'}}
              aria-label="Start a new chat"
              disabled={loading}
            >
              New Chat
            </button>
            <button onClick={toggleChat} className="text-white hover:text-blue-200 transition-colors duration-150">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div
                    className={
                      msg.sender === 'user'
                        ? 'max-w-[70%] bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-2xl rounded-br-sm shadow-md text-sm'
                        : 'max-w-[80%] bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-2xl rounded-bl-sm border border-blue-100 shadow text-sm'
                    }
                  >
                    {msg.text}
                  </div>
                </div>
                {/* Show prompt list directly after the initial AI message, before any user message */}
                {idx === 0 && msg.sender === 'ai' && messages.length === 1 && !loading && (
                  <div className="flex flex-col items-start gap-2 mt-2 ml-2">
                    {[
                      'What is your name?',
                      'Tell me a joke.',
                      'What is the weather today?'
                    ].map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition-transform duration-150 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
                        onClick={async () => {
                          setInput('');
                          setLoading(true);
                          setMessages((msgs) => [...msgs, { sender: 'user', text: prompt }]);
                          try {
                            const res = await fetch('https://hyperscriber-ai.up.railway.app/api/chat', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ message: prompt }),
                            });
                            if (!res.ok) throw new Error('Server error');
                            const data = await res.json();
                            setMessages((msgs) => [...msgs, { sender: 'ai', text: data.reply || 'No response from AI.' }]);
                          } catch (err) {
                            console.error('ChatBot suggestion fetch error:', err);
                            setMessages((msgs) => [...msgs, { sender: 'ai', text: 'Sorry, there was an error connecting to the AI server.' }]);
                            setError('Failed to connect to AI server.');
                          } finally {
                            setLoading(false);
                            setTimeout(() => {
                              messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }
                        }}
                        disabled={loading}
                        aria-label={`Send prompt: ${prompt}`}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            {loading && (
              <div className="flex justify-start animate-fade-in">
                <div className="max-w-[80%] bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-2xl rounded-bl-sm border border-blue-100 shadow text-sm italic opacity-80">
                  The AI is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
};

export default ChatBot;
