import React, { useState } from 'react';
import { CalendarIcon, PlaneLandingIcon } from 'lucide-react';
interface LeaveBalanceTrackerProps {
  daysRemaining: number;
  nextHoliday: {
    date: string;
    name: string;
  };
}
const LeaveBalanceTracker: React.FC<LeaveBalanceTrackerProps> = ({
  daysRemaining,
  nextHoliday
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };
  return <div className="bg-white rounded-xl shadow-sm p-4 relative">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium text-gray-700">Leave Balance</h3>
        <PlaneLandingIcon size={18} className="text-teal-500" />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-2xl font-bold text-teal-600">
            {daysRemaining}
          </div>
          <div className="text-xs text-gray-500">days remaining</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium">{nextHoliday.name}</div>
          <div className="text-xs text-gray-500">
            {formatDate(nextHoliday.date)}
          </div>
        </div>
      </div>
      <button onClick={toggleCalendar} className="flex items-center justify-center w-full py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors duration-200">
        <CalendarIcon size={16} className="mr-1" />
        <span>Plan Leave</span>
      </button>
      {showCalendar && <div className="absolute left-0 right-0 bottom-full mb-2 bg-white rounded-xl shadow-lg p-4 z-10 animate-slide-up">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">Select Dates</h4>
            <button onClick={toggleCalendar} className="text-gray-500 hover:text-gray-700" aria-label="Close calendar">
              ✕
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => <div key={i} className="text-xs font-medium text-gray-500 py-1">
                {day}
              </div>)}
            {Array.from({
          length: 35
        }).map((_, i) => {
          const isWeekend = i % 7 === 0 || i % 7 === 6;
          const isHoliday = i === 15;
          const isPast = i < 10;
          return <div key={i} className={`text-xs rounded-full w-7 h-7 flex items-center justify-center ${isPast ? 'text-gray-300' : isHoliday ? 'bg-red-100 text-red-600 animate-pulse-slow' : isWeekend ? 'bg-gray-100 text-gray-600' : 'hover:bg-blue-100 cursor-pointer'}`}>
                  {i + 1}
                </div>;
        })}
          </div>
        </div>}
    </div>;
};
export default LeaveBalanceTracker;