import React from 'react';
import ProfileGreeting from '../home/ProfileGreeting';
import AttendanceTracker from '../home/AttendanceTracker';
import ProductivityCard from '../home/ProductivityCard';
import MoodTracker from '../home/MoodTracker';
import RecognitionWidget from '../home/RecognitionWidget';
import GoalsProgress from '../home/GoalsProgress';
import LeaveBalanceTracker from '../home/LeaveBalanceTracker';
import AISuggestions from '../home/AISuggestions';
interface HomeScreenProps {
  onProfileClick?: () => void;
}
const HomeScreen: React.FC<HomeScreenProps> = ({
  onProfileClick
}) => {
  return <div className="flex flex-col w-full min-h-full p-4 space-y-4 bg-gray-50">
      <ProfileGreeting name="Sarah" onProfileClick={onProfileClick} />
      <div className="grid grid-cols-2 gap-4">
        <AttendanceTracker checkInTime="09:15 AM" streak={12} isCheckedIn={true} />
        <ProductivityCard score={85} />
      </div>
      <MoodTracker previousMood="happy" />
      <RecognitionWidget kudos={[{
      id: '1',
      sender: 'John Doe',
      message: 'Great work on the project presentation!',
      senderPhoto: 'https://randomuser.me/api/portraits/men/32.jpg'
    }]} />
      <GoalsProgress goals={[{
      id: '1',
      title: 'Complete Project X',
      progress: 75
    }, {
      id: '2',
      title: 'Learn React Native',
      progress: 30
    }, {
      id: '3',
      title: 'Improve Team Collaboration',
      progress: 60
    }]} />
      <LeaveBalanceTracker daysRemaining={15} nextHoliday={{
      date: '2023-12-25',
      name: 'Christmas'
    }} />
      <AISuggestions suggestions={[{
      id: '1',
      title: 'Track Progress',
      description: 'Update your weekly project status'
    }, {
      id: '2',
      title: 'Schedule Team Meeting',
      description: 'Your team needs alignment on Project X'
    }, {
      id: '3',
      title: 'Take a Break',
      description: "You've been working for 2 hours straight"
    }]} />
    </div>;
};
export default HomeScreen;