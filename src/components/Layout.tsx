import React from 'react';
import BottomNavigation from './shared/BottomNavigation';
import FloatingAIButton from './shared/FloatingAIButton';
interface LayoutProps {
  children: React.ReactNode;
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
  showAIModal: boolean;
  setShowAIModal: (show: boolean) => void;
  showProfile?: boolean;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  activeScreen,
  setActiveScreen,
  showAIModal,
  setShowAIModal,
  showProfile
}) => {
  return <div className="relative flex flex-col w-full h-full max-w-md mx-auto bg-white overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-16">{children}</main>
      {!showProfile && <>
          <BottomNavigation activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
          <FloatingAIButton onClick={() => setShowAIModal(!showAIModal)} isActive={showAIModal} />
        </>}
    </div>;
};
export default Layout;