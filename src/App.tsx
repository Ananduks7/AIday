import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import HomeScreen from './components/screens/HomeScreen';
import AIAssistantScreen from './components/screens/AIAssistantScreen';
import RecognitionScreen from './components/screens/RecognitionScreen';
import GoalsScreen from './components/screens/GoalsScreen';
import ProfilePage from './components/screens/ProfilePage';
import OnboardingFlow from './components/onboarding/OnboardingFlow';
export function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [showAIModal, setShowAIModal] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  // For demo purposes, we'll use localStorage to track onboarding status
  // In a real app, this would be connected to user authentication
  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem('onboardingComplete') === 'true';
    setOnboardingComplete(hasCompletedOnboarding);
  }, []);
  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingComplete', 'true');
    setOnboardingComplete(true);
  };
  const handleLogout = () => {
    localStorage.removeItem('onboardingComplete');
    setOnboardingComplete(false);
    setShowProfile(false);
  };
  const renderScreen = () => {
    if (showProfile) {
      return <ProfilePage onBack={() => setShowProfile(false)} onLogout={handleLogout} />;
    }
    switch (activeScreen) {
      case 'home':
        return <HomeScreen onProfileClick={() => setShowProfile(true)} />;
      case 'ai':
        return <AIAssistantScreen />;
      case 'recognition':
        return <RecognitionScreen />;
      case 'goals':
        return <GoalsScreen />;
      default:
        return <HomeScreen onProfileClick={() => setShowProfile(true)} />;
    }
  };
  if (!onboardingComplete) {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }
  return <div className="w-full h-full bg-gray-50">
      <Layout activeScreen={activeScreen} setActiveScreen={setActiveScreen} showAIModal={showAIModal} setShowAIModal={setShowAIModal} showProfile={showProfile}>
        {renderScreen()}
        {showAIModal && <AIAssistantScreen isModal={true} onClose={() => setShowAIModal(false)} />}
      </Layout>
    </div>;
}