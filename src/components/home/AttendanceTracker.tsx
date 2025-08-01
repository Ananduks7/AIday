import React, { useState } from 'react';
import { CheckCircleIcon, ClockIcon } from 'lucide-react';
interface AttendanceTrackerProps {
  checkInTime: string;
  streak: number;
  isCheckedIn: boolean;
}
const AttendanceTracker: React.FC<AttendanceTrackerProps> = ({
  checkInTime,
  streak,
  isCheckedIn
}) => {
  const [isPulsing, setIsPulsing] = useState(!isCheckedIn);
  const handleCheckIn = () => {
    if (!isCheckedIn) {
      setIsPulsing(false);
      // Here we would typically call an API to check in
      // For demo purposes, we'll just stop the pulsing
    }
  };
  return <div className="bg-white rounded-xl shadow-sm p-4 relative overflow-hidden">
      <h3 className="font-medium text-gray-700 mb-2">Attendance</h3>
      <div className="flex items-center mb-2">
        <ClockIcon size={16} className="text-gray-500 mr-1" />
        <span className="text-sm text-gray-600">{checkInTime}</span>
      </div>
      <div className="flex items-center space-x-1 mb-3">
        <span className="text-xs font-medium text-gray-500">
          {streak}-day streak
        </span>
        <span className="text-xs">🔥</span>
      </div>
      <button onClick={handleCheckIn} disabled={isCheckedIn} className={`flex items-center justify-center w-full rounded-lg py-2 transition-all duration-300 ${isCheckedIn ? 'bg-green-100 text-green-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
        {isCheckedIn ? <>
            <CheckCircleIcon size={16} className="mr-1 text-green-600" />
            <span>Checked In</span>
          </> : <span className={`${isPulsing ? 'animate-pulse' : ''}`}>
            Check In
          </span>}
      </button>
      {isCheckedIn && <div className="absolute top-3 right-3">
          <CheckCircleIcon size={20} className="text-green-500" />
        </div>}
    </div>;
};
export default AttendanceTracker;