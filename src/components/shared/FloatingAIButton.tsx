import React from 'react';
import { MicIcon } from 'lucide-react';
interface FloatingAIButtonProps {
  onClick: () => void;
  isActive: boolean;
}
const FloatingAIButton: React.FC<FloatingAIButtonProps> = ({
  onClick,
  isActive
}) => {
  return <div className="fixed bottom-14 left-1/2 transform -translate-x-1/2 z-20">
      <button onClick={onClick} className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg ${isActive ? 'bg-blue-600' : 'bg-blue-500'} text-white transition-all duration-300 hover:bg-blue-600`} style={{
      transform: isActive ? 'scale(1.1)' : 'scale(1)'
    }}>
        <MicIcon size={24} />
        {!isActive && <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />}
      </button>
    </div>;
};
export default FloatingAIButton;