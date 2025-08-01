import React from 'react';
import { HomeIcon, UsersIcon, AwardIcon, BarChart2Icon, MicIcon } from 'lucide-react';
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
        <button onClick={onVoiceAssistant} className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-xl transition-all duration-300 group">
          <div className="absolute inset-0 rounded-full bg-white opacity-40 group-hover:opacity-60 animate-pulse"></div>
          <MicIcon size={24} />
        </button>
      </div>
    </div>;
};
export default HRBottomNavigation;