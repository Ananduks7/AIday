import React, { useState } from 'react';
import { HomeIcon, UsersIcon, AwardIcon, BarChart2Icon, MicIcon, CheckIcon } from 'lucide-react';
interface HRBottomNavigationProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
  onVoiceAssistant: () => void;
}
const HRBottomNavigation: React.FC<HRBottomNavigationProps> = ({
  activeScreen,
  setActiveScreen,
  onVoiceAssistant
}) => {
  const [isMicActive, setIsMicActive] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');
  const navItems = [{
    id: 'home',
    icon: HomeIcon,
    label: 'Home'
  }, {
    id: 'teams',
    icon: UsersIcon,
    label: 'Teams'
  }, {
    id: 'awards',
    icon: AwardIcon,
    label: 'Awards'
  }, {
    id: 'analytics',
    icon: BarChart2Icon,
    label: 'Analytics'
  }];
  const handleMicClick = () => {
    setIsMicActive(!isMicActive);
    // In a real app, this would start voice recognition
    if (!isMicActive) {
      // Simulating text appearing as user speaks
      setTimeout(() => {
        setTranscribedText('Show me team performance...');
      }, 1500);
    } else {
      setTranscribedText('');
    }
  };
  const handleOkClick = () => {
    // Process the transcribed text
    onVoiceAssistant();
    setIsMicActive(false);
    setTranscribedText('');
  };
  return <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex justify-around items-center h-16 px-2 z-10">
      {navItems.map(item => {
      const isActive = activeScreen === item.id;
      return <button key={item.id} className={`flex flex-col items-center justify-center w-full h-full relative ${isActive ? 'text-purple-600' : 'text-gray-500'}`} onClick={() => setActiveScreen(item.id)}>
            <item.icon size={22} />
            <span className="text-xs mt-1">{item.label}</span>
            {isActive && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-purple-600 rounded-t-full transition-all duration-300" />}
          </button>;
    })}
      {/* Floating Voice AI Assistant Button */}
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
        {/* Transcription field that appears when mic is active */}
        {isMicActive && <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full py-2 px-4 flex items-center animate-slide-up min-w-[200px]">
            <p className="text-sm text-gray-700 flex-1 truncate">
              {transcribedText}
            </p>
            {transcribedText && <button onClick={handleOkClick} className="ml-2 bg-purple-500 text-white rounded-full p-1 hover:bg-purple-600 transition-colors">
                <CheckIcon size={14} />
              </button>}
          </div>}
        <button onClick={handleMicClick} className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg ${isMicActive ? 'bg-gradient-to-r from-purple-600 to-indigo-700' : 'bg-gradient-to-r from-purple-500 to-indigo-600'} text-white hover:shadow-xl transition-all duration-300 group`}>
          <div className={`absolute inset-0 rounded-full bg-white ${isMicActive ? 'opacity-30 animate-ping scale-105' : 'opacity-40 group-hover:opacity-60 animate-pulse'}`}></div>
          {/* Additional ripple animation when active */}
          {isMicActive && <>
              <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping" style={{
            animationDuration: '1.5s'
          }}></div>
              <div className="absolute inset-0 rounded-full bg-white opacity-10 animate-ping" style={{
            animationDuration: '2s'
          }}></div>
            </>}
          <MicIcon size={24} className={isMicActive ? 'animate-pulse' : ''} />
        </button>
      </div>
    </div>;
};
export default HRBottomNavigation;