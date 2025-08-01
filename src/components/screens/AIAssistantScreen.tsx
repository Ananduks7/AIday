import React, { useEffect, useState, useRef, Component } from 'react';
import { MicIcon, SendIcon, XIcon, PlusIcon, PlayIcon, PauseIcon } from 'lucide-react';
interface AIAssistantScreenProps {
  isModal?: boolean;
  onClose?: () => void;
}
const AIAssistantScreen: React.FC<AIAssistantScreenProps> = ({
  isModal = false,
  onClose
}) => {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [showBreathingExercise, setShowBreathingExercise] = useState(false);
  const handleSend = () => {
    if (message.trim()) {
      // Here we would typically send the message to an API
      setMessage('');
    }
  };
  const toggleListening = () => {
    setIsListening(!isListening);
  };
  const handleCardClick = (cardId: string) => {
    // Only show breathing exercise for the meditation card
    if (cardId === '4') {
      setShowBreathingExercise(true);
    }
  };
  return <div className={`bg-white ${isModal ? 'fixed inset-0 z-50 animate-fade-in overflow-auto' : 'min-h-full'}`}>
      {isModal && <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium">AI Assistant</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close">
            <XIcon size={20} />
          </button>
        </div>}
      <div className="p-4">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2 animate-float">
            <BrainCircuit size={32} className="text-blue-600" />
          </div>
          <h2 className="text-lg font-medium text-gray-800">
            Here to help you
          </h2>
          <p className="text-sm text-gray-500">
            Ask me anything about your work
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Recent Activities
          </h3>
          <div className="space-y-3">
            {[{
            id: '1',
            title: 'Daily Analysis',
            time: '09:30 AM',
            icon: '📊'
          }, {
            id: '2',
            title: 'Progress Report',
            time: 'Yesterday',
            icon: '📈'
          }, {
            id: '3',
            title: 'Smart Suggestions',
            time: 'Monday',
            icon: '💡'
          }].map(activity => <div key={activity.id} className="flex items-center bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200">
                <div className="text-xl mr-3">{activity.icon}</div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{activity.title}</h4>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <button className="text-blue-500 hover:text-blue-700">
                  <ChevronRightIcon size={18} />
                </button>
              </div>)}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Suggested for You
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[{
            id: '1',
            title: 'Focus Mode',
            icon: '🎯',
            description: 'Boost productivity'
          }, {
            id: '2',
            title: 'New Skill',
            icon: '🧠',
            description: 'Learn something new'
          }, {
            id: '3',
            title: 'Schedule',
            icon: '📅',
            description: 'Plan your week'
          }, {
            id: '4',
            title: 'Meditation',
            icon: '🧘',
            description: '5-min mindfulness'
          }].map(card => <div key={card.id} className={`${card.id === '4' ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100' : 'bg-white border-gray-200'} border rounded-lg p-3 hover:shadow-md transition-all duration-200 group cursor-pointer`} onClick={() => handleCardClick(card.id)}>
                <div className="flex items-center mb-2">
                  <span className={`text-xl mr-2 ${card.id === '4' ? 'animate-pulse-slow' : ''}`}>
                    {card.icon}
                  </span>
                  <h4 className={`text-sm font-medium ${card.id === '4' ? 'text-indigo-700' : ''}`}>
                    {card.title}
                  </h4>
                </div>
                <p className={`text-xs ${card.id === '4' ? 'text-indigo-500' : 'text-gray-500'}`}>
                  {card.description}
                </p>
                <div className={`mt-2 text-xs font-medium ${card.id === '4' ? 'text-indigo-500 opacity-70 group-hover:opacity-100' : 'text-blue-500 opacity-0 group-hover:opacity-100'} transition-opacity duration-200`}>
                  {card.id === '4' ? 'Start breathing →' : 'Try now →'}
                </div>
              </div>)}
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 animate-slide-in-bottom">
          <div className="flex items-center mb-1">
            <span className="text-xl mr-2">💡</span>
            <h4 className="text-sm font-medium text-blue-800">
              Morning Productivity Tip
            </h4>
          </div>
          <p className="text-xs text-blue-700">
            Start your day by completing your most important task first. This
            builds momentum for the rest of the day.
          </p>
        </div>
      </div>
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-3">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Ask me anything..." className="flex-1 bg-transparent outline-none text-sm" />
          <button onClick={toggleListening} className={`p-2 rounded-full mr-1 ${isListening ? 'bg-red-100 text-red-600 animate-pulse' : 'text-gray-500 hover:text-gray-700'}`} aria-label={isListening ? 'Stop listening' : 'Start voice input'}>
            <MicIcon size={18} />
          </button>
          <button onClick={handleSend} disabled={!message.trim()} className={`p-2 rounded-full ${message.trim() ? 'text-blue-600 hover:text-blue-700' : 'text-gray-400'}`} aria-label="Send message">
            <SendIcon size={18} />
          </button>
        </div>
        <div className="flex mt-2 overflow-x-auto py-1 -mx-1 space-x-2">
          {['How to improve focus?', 'Schedule meeting', 'Daily summary'].map((suggestion, i) => <button key={i} className="flex-shrink-0 text-xs bg-white border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-50 transition-colors duration-200" onClick={() => setMessage(suggestion)}>
                {suggestion}
              </button>)}
          <button className="flex-shrink-0 text-xs bg-white border border-gray-200 rounded-full px-2 py-1 hover:bg-gray-50 transition-colors duration-200">
            <PlusIcon size={14} />
          </button>
        </div>
      </div>
      {/* Breathing Exercise Modal */}
      {showBreathingExercise && <BreathingExerciseModal onClose={() => setShowBreathingExercise(false)} />}
    </div>;
};
// Breathing Exercise Modal Component
const BreathingExerciseModal: React.FC<{
  onClose: () => void;
}> = ({
  onClose
}) => {
  const [duration, setDuration] = useState(180); // 3 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(duration);
  const [breathingPhase, setBreathingPhase] = useState<'in' | 'hold' | 'out'>('in');
  const [phaseTime, setPhaseTime] = useState(4); // 4 seconds per phase
  const timerRef = useRef<number | null>(null);
  // Phase durations in seconds
  const phaseDurations = {
    in: 4,
    hold: 4,
    out: 4
  };
  // Start or pause the breathing exercise
  const toggleExercise = () => {
    if (isRunning) {
      // Pause the exercise
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    } else {
      // Start the exercise
      timerRef.current = window.setInterval(() => {
        setCurrentTime(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
        setPhaseTime(prev => {
          if (prev <= 1) {
            // Move to the next phase
            setBreathingPhase(currentPhase => {
              if (currentPhase === 'in') return 'hold';
              if (currentPhase === 'hold') return 'out';
              return 'in';
            });
            return phaseDurations[breathingPhase === 'in' ? 'hold' : breathingPhase === 'hold' ? 'out' : 'in'];
          }
          return prev - 1;
        });
      }, 1000);
    }
    setIsRunning(!isRunning);
  };
  // Set the selected duration
  const handleDurationSelect = (seconds: number) => {
    setDuration(seconds);
    setCurrentTime(seconds);
    // Reset if already running
    if (isRunning) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setIsRunning(false);
    }
  };
  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  // Handle closing the modal with cleanup
  const handleClose = () => {
    // Stop any running timers
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    // Call the onClose prop to navigate back
    onClose();
  };
  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  return <div className="fixed inset-0 bg-indigo-50 bg-opacity-98 z-50 flex flex-col items-center justify-center animate-fade-in">
      {/* Close button */}
      <button onClick={handleClose} className="absolute top-4 right-4 text-indigo-400 hover:text-indigo-600 transition-colors z-10" aria-label="Close breathing exercise" type="button">
        <XIcon size={24} />
      </button>
      {/* Duration selector */}
      <div className="absolute top-4 left-0 right-0 flex justify-center space-x-3 mb-8">
        {[{
        label: '1 min',
        seconds: 60
      }, {
        label: '3 min',
        seconds: 180
      }, {
        label: '5 min',
        seconds: 300
      }].map(option => <button key={option.label} onClick={() => handleDurationSelect(option.seconds)} className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${duration === option.seconds ? 'bg-indigo-200 text-indigo-700 shadow-sm transform scale-105' : 'bg-white bg-opacity-50 text-indigo-500 hover:bg-opacity-70 hover:shadow-sm'}`}>
            {option.label}
          </button>)}
      </div>
      {/* Session timer */}
      <div className="text-indigo-400 text-sm mb-6">
        Session: {formatTime(currentTime)}
      </div>
      {/* Breathing circle animation */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer circle - animation track */}
        <div className="w-64 h-64 rounded-full border-2 border-indigo-100 flex items-center justify-center">
          {/* Middle circle - progress indicator */}
          <div className="absolute w-64 h-64">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#e0e7ff" strokeWidth="1" />
              <circle cx="50" cy="50" r="48" fill="none" stroke="#818cf8" strokeWidth="2" strokeDasharray="302" strokeDashoffset={302 - 302 * phaseTime / phaseDurations[breathingPhase]} strokeLinecap="round" transform="rotate(-90 50 50)" className="transition-all duration-1000 ease-linear" />
            </svg>
          </div>
          {/* Inner circle - breathing animation */}
          <div className={`rounded-full bg-indigo-200 bg-opacity-60 flex items-center justify-center transition-all duration-1000 ease-in-out ${breathingPhase === 'in' ? 'w-48 h-48' : breathingPhase === 'hold' ? 'w-56 h-56' : 'w-36 h-36'}`}>
            {/* Breathing instruction */}
            <div className="text-center">
              <div className="text-indigo-700 font-medium text-xl mb-1">
                {breathingPhase === 'in' ? 'Breathe In' : breathingPhase === 'hold' ? 'Hold' : 'Breathe Out'}
              </div>
              <div className="text-indigo-500 text-3xl font-light">
                {phaseTime}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Instruction text */}
      <div className="text-center mb-8 px-6">
        <p className="text-indigo-600 text-sm">
          Focus on your breath and let go of any thoughts or distractions.
        </p>
      </div>
      {/* Start/Pause button */}
      <button onClick={toggleExercise} className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500 text-white shadow-md hover:bg-indigo-600 transition-colors" aria-label={isRunning ? 'Pause breathing exercise' : 'Start breathing exercise'}>
        {isRunning ? <PauseIcon size={28} /> : <PlayIcon size={28} />}
      </button>
    </div>;
};
// Import missing icons
const BrainCircuit = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5" />
    <path d="m15.7 10.4-.9.4" />
    <path d="m9.2 13.2.9-.4" />
    <path d="m12.5 6.3-.5.9" />
    <path d="m12 17.8.5-.9" />
    <path d="M12 4.5v1" />
    <path d="M12 18.5v1" />
    <path d="M19.5 12h-1" />
    <path d="M5.5 12h1" />
    <path d="m7.5 7.5.5.5" />
    <path d="m16 16-.5-.5" />
    <path d="m16 8-.5.5" />
    <path d="m7.5 16.5.5-.5" />
  </svg>;
const ChevronRightIcon = ({
  size,
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>;
export default AIAssistantScreen;