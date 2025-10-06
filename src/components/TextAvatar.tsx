import React from 'react';
import './TextAvatar.css';

interface TextAvatarProps {
  name: string;
  size?: number;
  fontSize?: number;
}

const TextAvatar: React.FC<TextAvatarProps> = ({ 
  name, 
  size = 150, 
  fontSize = 48 
}) => {
  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div 
      className="text-avatar"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${fontSize}px`,
      }}
    >
      {getInitials(name)}
    </div>
  );
};

export default TextAvatar;
