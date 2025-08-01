import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, BrainIcon, CheckIcon } from 'lucide-react';
interface QuestionnaireScreenProps {
  onNext: () => void;
  onBack: () => void;
}
const QuestionnaireScreen: React.FC<QuestionnaireScreenProps> = ({
  onNext,
  onBack
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showChatBubble, setShowChatBubble] = useState(true);
  const questions = [{
    id: 'work-style',
    question: 'How do you prefer to work?',
    options: [{
      id: 'focus',
      label: 'Deep focus with minimal interruptions'
    }, {
      id: 'balance',
      label: 'Balance of focus and collaboration'
    }, {
      id: 'collaborative',
      label: 'Highly collaborative environment'
    }, {
      id: 'flexible',
      label: 'Varies based on the task at hand'
    }]
  }, {
    id: 'goals',
    question: 'What are your primary goals?',
    options: [{
      id: 'skill-growth',
      label: 'Develop new skills'
    }, {
      id: 'productivity',
      label: 'Improve productivity'
    }, {
      id: 'wellness',
      label: 'Better work-life balance'
    }, {
      id: 'career',
      label: 'Career advancement'
    }]
  }, {
    id: 'kudos',
    question: 'How do you prefer to receive recognition?',
    options: [{
      id: 'public',
      label: 'Public recognition in team settings'
    }, {
      id: 'private',
      label: 'Private acknowledgment from manager'
    }, {
      id: 'written',
      label: 'Written feedback and testimonials'
    }, {
      id: 'rewards',
      label: 'Tangible rewards and incentives'
    }]
  }, {
    id: 'notifications',
    question: 'What notifications would you like to receive?',
    options: [{
      id: 'all',
      label: 'All notifications (productivity, wellness, tips)'
    }, {
      id: 'important',
      label: 'Only important alerts and reminders'
    }, {
      id: 'minimal',
      label: 'Minimal notifications (weekly summaries)'
    }, {
      id: 'custom',
      label: 'Custom schedule (morning and evening only)'
    }]
  }];
  const currentQuestion = questions[currentQuestionIndex];
  const handleSelectOption = (optionId: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId
    });
  };
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onNext();
    }
  };
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      onBack();
    }
  };
  const progressPercentage = (currentQuestionIndex + 1) / questions.length * 100;
  return <div className="flex flex-col min-h-full bg-gradient-to-b from-green-50 to-white">
      {/* Header with back button and progress */}
      <div className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-sm z-10 px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <button onClick={handleBack} className="p-2 rounded-full hover:bg-gray-100" aria-label="Go back">
          <ArrowLeftIcon size={20} className="text-gray-600" />
        </button>
        <div className="flex-1 flex justify-center">
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-400 rounded-full transition-all duration-300" style={{
            width: `${75}%`
          }}></div>
          </div>
        </div>
        <div className="w-10"></div> {/* Spacer for balance */}
      </div>
      <div className="flex-1 p-6">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
            <BrainIcon size={24} className="text-green-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              AI Personalization
            </h1>
            <p className="text-sm text-gray-600">
              Help us tailor your experience
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            {currentQuestion.question}
          </h2>
          <div className="space-y-3">
            {currentQuestion.options.map(option => <button key={option.id} onClick={() => handleSelectOption(option.id)} className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${answers[currentQuestion.id] === option.id ? 'bg-green-50 border-green-300 text-green-800' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                <span>{option.label}</span>
                {answers[currentQuestion.id] === option.id && <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon size={14} className="text-white" />
                  </div>}
              </button>)}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
          <button onClick={handleNext} disabled={!answers[currentQuestion.id]} className={`px-6 py-3 rounded-xl font-medium flex items-center ${answers[currentQuestion.id] ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed'} transition-colors duration-200`}>
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Complete'}
            <ArrowRightIcon size={18} className="ml-1" />
          </button>
        </div>
      </div>
      {/* AI Chat Bubble */}
      {showChatBubble && <div className="fixed bottom-6 left-6 right-6 flex">
          <div className="w-10 h-10 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
            <BrainIcon size={20} className="text-green-600" />
          </div>
          <div className="ml-2 bg-green-100 rounded-2xl rounded-tl-none p-4 text-sm text-green-800 max-w-[85%] animate-fade-in cursor-pointer" onClick={() => setShowChatBubble(false)}>
            Your answers help me create a personalized experience tailored to
            your work style and preferences.
          </div>
        </div>}
    </div>;
};
export default QuestionnaireScreen;