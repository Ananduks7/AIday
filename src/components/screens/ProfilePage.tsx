import React from 'react';
import { ArrowLeftIcon, LogOutIcon, UserCircleIcon } from 'lucide-react';
interface ProfilePageProps {
  onBack: () => void;
  onLogout: () => void;
}
const ProfilePage: React.FC<ProfilePageProps> = ({
  onBack,
  onLogout
}) => {
  // This would typically come from a user context or props
  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    jobTitle: 'Product Designer',
    department: 'Design',
    profileImage: 'https://randomuser.me/api/portraits/women/65.jpg'
  };
  return <div className="flex flex-col w-full min-h-full bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100" aria-label="Go back">
          <ArrowLeftIcon size={20} className="text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Profile</h1>
        <div className="w-10"></div> {/* Spacer for balance */}
      </div>
      <div className="flex flex-col items-center p-6">
        {/* Profile Image */}
        <div className="relative mb-4">
          {userData.profileImage ? <img src={userData.profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-blue-500" /> : <UserCircleIcon size={96} className="text-blue-500" />}
        </div>
        {/* User Info */}
        <h2 className="text-xl font-bold text-gray-800">{userData.name}</h2>
        <p className="text-gray-500">{userData.jobTitle}</p>
        <p className="text-sm text-gray-400 mb-6">{userData.department}</p>
        {/* User Details */}
        <div className="w-full bg-gray-50 rounded-xl p-4 mb-6">
          <div className="mb-4">
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-gray-800">{userData.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Work Schedule</p>
            <p className="text-gray-800">Standard (9AM - 5PM)</p>
          </div>
        </div>
        {/* Logout Button */}
        <button onClick={onLogout} className="w-full py-3 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mt-auto">
          <LogOutIcon size={18} className="mr-2" />
          Logout
        </button>
      </div>
    </div>;
};
export default ProfilePage;