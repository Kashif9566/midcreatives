import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, X, Send, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  actions?: {
    label: string;
    action: string;
  }[];
}

export default function Chatbot() {
  const navigate = useNavigate();
  const user = useAuthStore(state => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsMinimized(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = user 
        ? `Welcome back${user.email ? ', ' + user.email.split('@')[0] : ''}! How can I help you today?`
        : 'Hi there! I\'m your marketing assistant. How can I help you today?';
      
      setMessages([{
        id: '1',
        type: 'bot',
        content: greeting,
        timestamp: new Date()
      }]);
    }
  }, [isOpen, user]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (showInitialAnimation) {
      const timer = setTimeout(() => {
        setShowInitialAnimation(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showInitialAnimation]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUserMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const botResponse = await getBotResponse(content);
    setMessages(prev => [...prev, {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: botResponse.message,
      timestamp: new Date(),
      actions: botResponse.actions
    }]);
    
    setIsTyping(false);
  };

  const getBotResponse = async (message: string): Promise<{ message: string; actions?: { label: string; action: string }[] }> => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return {
        message: 'Our pricing is designed to fit businesses of all sizes:\n\n' +
                '• Basic Plan: $999/month\n' +
                '• Growth Plan: $2,499/month\n' +
                '• Enterprise: Custom pricing\n\n' +
                'Would you like to learn more about what\'s included in each plan?',
        actions: [
          { label: 'View Plan Details', action: 'Tell me more about the plans' },
          { label: 'Talk to Sales', action: 'I want to talk to sales about pricing' }
        ]
      };
    }
    
    if (lowerMessage.includes('services')) {
      return {
        message: 'We offer a comprehensive suite of marketing services:\n\n' +
                '• SEO & Content Marketing\n' +
                '• PPC & Paid Advertising\n' +
                '• Social Media Marketing\n' +
                '• Email Marketing\n' +
                '• Content Creation\n\n' +
                'Which service would you like to learn more about?',
        actions: [
          { label: 'SEO Services', action: 'Tell me about SEO services' },
          { label: 'PPC Services', action: 'Tell me about PPC services' },
          { label: 'Social Media', action: 'Tell me about social media services' }
        ]
      };
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('start')) {
      return {
        message: 'I\'d be happy to help you start a new project! Let me ask you a few questions to understand your needs better:\n\n' +
                '1. What type of marketing service are you interested in?\n' +
                '2. Do you have a specific timeline in mind?\n' +
                '3. Would you like to use one of our templates or start from scratch?',
        actions: [
          { label: 'Browse Templates', action: 'Show me your templates' },
          { label: 'Start Custom Project', action: 'I want to start a custom project' }
        ]
      };
    }

    if (lowerMessage.includes('support') || lowerMessage.includes('help')) {
      return {
        message: 'I\'ll help you get in touch with our support team. Our average response time during business hours (9am-6pm EST) is under 15 minutes.\n\n' +
                'Would you like me to:\n' +
                '1. Create a support ticket for you\n' +
                '2. Connect you with a live agent\n' +
                '3. Help you find answers in our knowledge base',
        actions: [
          { label: 'Create Ticket', action: 'Create a support ticket' },
          { label: 'Live Agent', action: 'Connect me with a live agent' }
        ]
      };
    }

    return {
      message: 'I understand you\'re interested in learning more. I can help you with:\n\n' +
              '• Starting a new marketing project\n' +
              '• Learning about our services\n' +
              '• Getting pricing information\n' +
              '• Speaking with our team\n\n' +
              'What would you like to explore?',
      actions: [
        { label: 'Start Project', action: 'I want to start a project' },
        { label: 'Learn More', action: 'Tell me about your services' }
      ]
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleUserMessage(inputValue.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (!isMinimized) {
      localStorage.setItem('chatState', JSON.stringify({
        messages,
        isOpen: true,
        isMinimized: true
      }));
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    localStorage.removeItem('chatState');
  };

  return (
    <>
      {/* Chat Button with Animation */}
      {!isOpen && !isMinimized && (
        <div className="fixed bottom-4 right-4 z-50">
          {/* Animated ring */}
          <div className="absolute inset-0 bg-indigo-400 rounded-full animate-pulse-ring"></div>
          
          {/* Main button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all group animate-pulse-dot"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-white text-gray-900 rounded-lg shadow-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Need help?
            </span>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {(isOpen || isMinimized) && (
        <div
          ref={chatRef}
          className={`fixed bottom-4 right-4 w-[320px] bg-white rounded-xl shadow-2xl z-50 transition-all duration-300 ${
            isMinimized ? 'h-12' : 'h-[480px]'
          }`}
        >
          {/* Header */}
          <div 
            className={`flex items-center justify-between p-3 bg-indigo-600 text-white rounded-t-xl cursor-pointer ${
              isMinimized ? 'rounded-b-xl' : ''
            }`}
            onClick={handleMinimize}
          >
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-white/10 rounded-lg">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <span className="text-sm font-medium">Marketing Assistant</span>
                <p className="text-xs text-indigo-200">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleMinimize();
                }}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMinimized ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto h-[calc(480px-120px)]">
                {messages.map((message) => (
                  <div key={message.id} className="space-y-3">
                    <div
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl px-4 py-2 ${
                          message.type === 'user'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <div className="whitespace-pre-line text-sm">{message.content}</div>
                      </div>
                    </div>
                    {message.actions && (
                      <div className="grid grid-cols-2 gap-2">
                        {message.actions.map((action, index) => (
                          <button
                            key={index}
                            onClick={() => handleUserMessage(action.action)}
                            className="text-xs px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-all text-left hover:shadow-md"
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1 bg-gray-100 px-3 py-2 rounded-xl">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="border-t p-3 bg-gray-50 rounded-b-xl">
                <div className="flex items-center space-x-2">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 resize-none border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    rows={1}
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}