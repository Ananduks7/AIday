import React from 'react';
import { HomeIcon, BrainCircuitIcon, AwardIcon, TargetIcon } from 'lucide-react';
interface BottomNavigationProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}
const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeScreen,
  setActiveScreen
}) => {
  const navItems = [{
    id: 'home',
    icon: HomeIcon,
    label: 'Home'
  }, {
    id: 'ai',
    icon: BrainCircuitIcon,
    label: 'AI Suggestions'
  }, {
    id: 'recognition',
    icon: AwardIcon,
    label: 'Achievements'
  }, {
    id: 'goals',
    icon: TargetIcon,
    label: 'Goals'
  }];
  return <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex justify-around items-center h-16 px-2 z-10">
      {navItems.map(item => {
      const isActive = activeScreen === item.id;
      return <button key={item.id} className={`flex flex-col items-center justify-center w-full h-full relative ${isActive ? 'text-blue-600' : 'text-gray-500'}`} onClick={() => setActiveScreen(item.id)}>
            <item.icon size={22} />
            <span className="text-xs mt-1">{item.label}</span>
            {isActive && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-t-full transition-all duration-300" />}
          </button>;
    })}
    </div>;
};
export default BottomNavigation;