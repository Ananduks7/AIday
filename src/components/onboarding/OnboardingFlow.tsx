import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import ProfileSetupScreen from './ProfileSetupScreen';
import QuestionnaireScreen from './QuestionnaireScreen';
import CompletionScreen from './CompletionScreen';
import HRDashboard from '../screens/hr/HRDashboard';
interface OnboardingFlowProps {
  onComplete: () => void;
}
const OnboardingFlow: React.FC<OnboardingFlowProps> = ({
  onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showHRDashboard, setShowHRDashboard] = useState(false);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleHRLogin = () => {
    setShowHRDashboard(true);
  };
  if (showHRDashboard) {
    return <HRDashboard />;
  }
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeScreen onNext={handleNext} onHRLogin={handleHRLogin} />;
      case 1:
        return <ProfileSetupScreen onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <QuestionnaireScreen onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <CompletionScreen onComplete={onComplete} />;
      default:
        return <WelcomeScreen onNext={handleNext} onHRLogin={handleHRLogin} />;
    }
  };
  return <div className="w-full h-full">{renderStep()}</div>;
};
export default OnboardingFlow;