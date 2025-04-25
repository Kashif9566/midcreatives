import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Image as ImageIcon, File, X, Check, CheckCheck } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

interface Message {
  id: string;
  content: string;
  sender: 'client' | 'manager';
  timestamp: string;
  status: 'sending' | 'sent' | 'delivered' | 'read';
  attachments?: {
    type: 'image' | 'file';
    url: string;
    name: string;
  }[];
}

const quickResponses = [
  'Got it!',
  'Thanks!',
  "Let's discuss further",
  'Sounds good',
  'Perfect',
];

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Hi! I have a question about our SEO campaign.",
    sender: 'client',
    timestamp: '10:30 AM',
    status: 'read'
  },
  {
    id: '2',
    content: "Of course! I'm happy to help. What would you like to know?",
    sender: 'manager',
    timestamp: '10:31 AM',
    status: 'read'
  },
  {
    id: '3',
    content: "When can we expect to see the first results from the optimization?",
    sender: 'client',
    timestamp: '10:32 AM',
    status: 'read'
  },
  {
    id: '4',
    content: "Generally, SEO results start becoming visible within 3-6 months. We're tracking progress weekly and I can share our latest report with you.",
    sender: 'manager',
    timestamp: '10:34 AM',
    status: 'read',
    attachments: [
      {
        type: 'file',
        url: '#',
        name: 'seo-report-feb-2025.pdf'
      }
    ]
  }
];

export default function Chat() {
  const user = useAuthStore(state => state.user);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Simulate manager typing
    const typingTimeout = setTimeout(() => {
      if (messages[messages.length - 1]?.sender === 'client') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          simulateManagerResponse();
        }, 2000);
      }
    }, 1000);

    return () => clearTimeout(typingTimeout);
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const simulateManagerResponse = () => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content: "I'm reviewing your request and will get back to you shortly.",
      sender: 'manager',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
    setMessages(prev => [...prev, newMessage]);

    // Play notification sound
    const audio = new Audio('/message.mp3');
    audio.play().catch(() => {}); // Ignore errors if sound can't play
  };

  const handleSubmit = async (e: React.FormEvent, quickResponse?: string) => {
    e.preventDefault();
    const messageContent = quickResponse || newMessage;
    if (!messageContent.trim() && files.length === 0) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      content: messageContent,
      sender: 'client',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sending',
      attachments: files.map(file => ({
        type: file.type.startsWith('image/') ? 'image' : 'file',
        url: URL.createObjectURL(file),
        name: file.name
      }))
    };

    setMessages(prev => [...prev, newMsg]);
    setNewMessage('');
    setFiles([]);

    // Simulate message status updates
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMsg.id ? { ...msg, status: 'sent' } : msg
        )
      );
    }, 500);

    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMsg.id ? { ...msg, status: 'delivered' } : msg
        )
      );
    }, 1000);

    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMsg.id ? { ...msg, status: 'read' } : msg
        )
      );
    }, 2000);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFiles(prev => [...prev, ...Array.from(e.dataTransfer.files)]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const getMessageStatusIcon = (status: string) => {
    switch (status) {
      case 'sending':
        return <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-400" />;
      case 'sent':
        return <Check className="h-3 w-3 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="h-3 w-3 text-gray-400" />;
      case 'read':
        return <CheckCheck className="h-3 w-3 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="h-[calc(100vh-12rem)]">
      <div className="flex flex-col h-full bg-white shadow-lg rounded-lg">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-1">
              <h2 className="text-lg font-medium text-gray-900">Marketing Manager Chat</h2>
              <p className="text-sm text-gray-500">Sarah Johnson • Marketing Manager</p>
            </div>
            <div className="flex items-center">
              <span className="h-2.5 w-2.5 bg-green-400 rounded-full mr-2"></span>
              <span className="text-sm text-gray-500">Online</span>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-6 space-y-4"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xl rounded-2xl px-4 py-2 ${
                  message.sender === 'client'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.content}
                
                {/* Attachments */}
                {message.attachments && message.attachments.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {message.attachments.map((attachment, index) => (
                      <div
                        key={index}
                        className={`flex items-center p-2 rounded-lg ${
                          message.sender === 'client' ? 'bg-indigo-700' : 'bg-gray-200'
                        }`}
                      >
                        {attachment.type === 'image' ? (
                          <ImageIcon className="h-5 w-5 mr-2" />
                        ) : (
                          <File className="h-5 w-5 mr-2" />
                        )}
                        <span className="text-sm truncate">{attachment.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className={`flex items-center justify-end mt-1 space-x-1 ${
                  message.sender === 'client' ? 'text-indigo-200' : 'text-gray-500'
                }`}>
                  <span className="text-xs">{message.timestamp}</span>
                  {message.sender === 'client' && (
                    <div className="ml-1">{getMessageStatusIcon(message.status)}</div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
              </div>
              <span className="text-sm">Sarah is typing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Responses */}
        <div className="px-6 py-2 border-t border-gray-200">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {quickResponses.map((response) => (
              <button
                key={response}
                onClick={(e) => handleSubmit(e, response)}
                className="flex-none px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                {response}
              </button>
            ))}
          </div>
        </div>

        {/* File Preview */}
        {files.length > 0 && (
          <div className="px-6 py-2 border-t border-gray-200">
            <div className="flex gap-2 overflow-x-auto">
              {files.map((file, index) => (
                <div key={index} className="relative flex items-center bg-gray-100 rounded-lg p-2">
                  {file.type.startsWith('image/') ? (
                    <ImageIcon className="h-5 w-5 text-gray-500 mr-2" />
                  ) : (
                    <File className="h-5 w-5 text-gray-500 mr-2" />
                  )}
                  <span className="text-sm text-gray-700 truncate max-w-xs">{file.name}</span>
                  <button
                    onClick={() => removeFile(index)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Message Input */}
        <div className="px-6 py-4 border-t border-gray-200">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={handleFileSelect}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Paperclip className="h-5 w-5" />
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}