import React from 'react';
import { CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
interface CompletionScreenProps {
  onComplete: () => void;
}
const CompletionScreen: React.FC<CompletionScreenProps> = ({
  onComplete
}) => {
  return <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-blue-50 via-purple-50 to-green-50">
      <div className="w-full max-w-sm text-center">
        {/* Success Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center animate-pulse-slow">
            <CheckCircleIcon size={64} className="text-green-500" />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-4 rounded-full bg-blue-400 animate-fall-slow opacity-70" style={{
            animationDelay: '0.2s'
          }}></div>
          </div>
          <div className="absolute top-0 left-1/3 transform -translate-x-1/2">
            <div className="w-3 h-3 rounded-full bg-purple-400 animate-fall-medium opacity-70" style={{
            animationDelay: '0.5s'
          }}></div>
          </div>
          <div className="absolute top-0 left-2/3 transform -translate-x-1/2">
            <div className="w-5 h-5 rounded-full bg-green-400 animate-fall-fast opacity-70" style={{
            animationDelay: '0.8s'
          }}></div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Your Personalized Setup is Ready!
        </h1>
        <p className="text-gray-600 mb-8">
          We've customized your experience based on your preferences. You're all
          set to boost your productivity and wellness.
        </p>
        {/* Summary Cards */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <h2 className="text-sm font-medium text-gray-700 mb-3">
            Your Profile Summary
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Work Style</span>
              <span className="text-sm font-medium text-gray-800 bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                Balanced Focus
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Primary Goal</span>
              <span className="text-sm font-medium text-gray-800 bg-purple-50 text-purple-700 px-2 py-1 rounded-full">
                Productivity
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Recognition</span>
              <span className="text-sm font-medium text-gray-800 bg-green-50 text-green-700 px-2 py-1 rounded-full">
                Private
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Notifications</span>
              <span className="text-sm font-medium text-gray-800 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full">
                Important Only
              </span>
            </div>
          </div>
        </div>
        <button onClick={onComplete} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200 flex items-center justify-center">
          Continue to Dashboard
          <ArrowRightIcon size={18} className="ml-1" />
        </button>
      </div>
    </div>;
};
export default CompletionScreen;