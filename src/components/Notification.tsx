import React, { useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';

interface NotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
  type?: 'info' | 'warning' | 'success';
}

export default function Notification({ 
  message, 
  isVisible, 
  onClose, 
  duration = 5000,
  type = 'info' 
}: NotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getBackgroundColor = () => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50';
      case 'success':
        return 'bg-green-50';
      default:
        return 'bg-blue-50';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'warning':
        return 'text-yellow-800';
      case 'success':
        return 'text-green-800';
      default:
        return 'text-blue-800';
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'warning':
        return 'text-yellow-400';
      case 'success':
        return 'text-green-400';
      default:
        return 'text-blue-400';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={`${getBackgroundColor()} rounded-lg shadow-lg p-4 max-w-sm border`}>
        <div className="flex items-start">
          <div className={`flex-shrink-0 ${getIconColor()}`}>
            <AlertCircle className="h-5 w-5" />
          </div>
          <div className="ml-3 flex-1">
            <p className={`text-sm font-medium ${getTextColor()}`}>{message}</p>
          </div>
          <button
            onClick={onClose}
            className={`ml-4 flex-shrink-0 flex hover:${getBackgroundColor()} rounded p-1 transition-colors`}
          >
            <X className={`h-4 w-4 ${getIconColor()}`} />
          </button>
        </div>
      </div>
    </div>
  );
}