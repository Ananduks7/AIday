import React, { useState } from 'react';
import { UserCircleIcon, EditIcon } from 'lucide-react';
interface ProfileGreetingProps {
  name: string;
  onProfileClick?: () => void;
}
const ProfileGreeting: React.FC<ProfileGreetingProps> = ({
  name,
  onProfileClick
}) => {
  const [profileImage, setProfileImage] = useState<string | null>('https://randomuser.me/api/portraits/women/65.jpg');
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    return 'evening';
  };
  return <div className="flex items-center justify-between w-full">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Good {getTimeOfDay()}, {name}
        </h1>
        <p className="text-sm text-gray-500">
          {new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        })}
        </p>
      </div>
      <div className="relative">
        <div onClick={onProfileClick} className="cursor-pointer">
          {profileImage ? <img src={profileImage} alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-blue-500" /> : <UserCircleIcon size={48} className="text-blue-500" />}
        </div>
        <button className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md border border-gray-200" aria-label="Edit profile">
          <EditIcon size={14} className="text-gray-600" />
        </button>
      </div>
    </div>;
};
export default ProfileGreeting;