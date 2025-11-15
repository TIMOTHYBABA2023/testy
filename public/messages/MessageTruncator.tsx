import React from 'react';

interface MessageTruncatorProps {
  text: string;
  maxLength: number;
  className?: string;
  showTooltip?: boolean;
}

export const MessageTruncator: React.FC<MessageTruncatorProps> = ({ 
  text, 
  maxLength, 
  className = "",
  showTooltip = true 
}) => {
  const shouldTruncate = text.length > maxLength;
  const truncatedText = shouldTruncate ? text.slice(0, maxLength) + '...' : text;
  
  if (showTooltip && shouldTruncate) {
    return (
      <span 
        className={`cursor-help ${className}`}
        title={text}
      >
        {truncatedText}
      </span>
    );
  }
  
  return (
    <span className={className}>
      {truncatedText}
    </span>
  );
};