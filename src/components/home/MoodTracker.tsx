import React, { useState } from 'react';
import { SmileIcon } from 'lucide-react';
interface MoodTrackerProps {
  previousMood: string;
}
const MoodTracker: React.FC<MoodTrackerProps> = ({
  previousMood
}) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const moods = [{
    emoji: '😀',
    name: 'happy',
    message: 'Great! Keep that positive energy going!'
  }, {
    emoji: '😐',
    name: 'neutral',
    message: 'Noted! Hope your day gets better!'
  }, {
    emoji: '😔',
    name: 'sad',
    message: "I'm sorry to hear that. Need someone to talk to?"
  }, {
    emoji: '😤',
    name: 'frustrated',
    message: 'Take a deep breath. Things will get better.'
  }, {
    emoji: '🤩',
    name: 'excited',
    message: 'Awesome! Your enthusiasm is contagious!'
  }];
  const handleMoodSelect = (mood: string, message: string) => {
    setSelectedMood(mood);
    setTooltipText(message);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };
  return <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-700">
          How are you feeling today?
        </h3>
        <SmileIcon size={18} className="text-yellow-500" />
      </div>
      <div className="flex justify-between mb-4 relative">
        {moods.map(mood => <button key={mood.name} onClick={() => handleMoodSelect(mood.name, mood.message)} className={`text-2xl transition-transform duration-200 ${selectedMood === mood.name ? 'transform scale-125' : 'hover:scale-110'}`} aria-label={`Select ${mood.name} mood`}>
            {mood.emoji}
          </button>)}
        {showTooltip && <div className="absolute -bottom-12 left-0 right-0 bg-blue-100 text-blue-800 text-xs py-2 px-3 rounded-lg animate-fade-in">
            {tooltipText}
          </div>}
      </div>
      <div className="text-xs text-gray-500 flex items-center">
        <span>Yesterday: </span>
        <span className="ml-1">
          {moods.find(m => m.name === previousMood)?.emoji || '😀'}
        </span>
      </div>
    </div>;
};
export default MoodTracker;