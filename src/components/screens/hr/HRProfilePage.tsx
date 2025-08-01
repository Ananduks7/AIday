import React from 'react';
import { ArrowLeftIcon, LogOutIcon, UserIcon, SettingsIcon, HelpCircleIcon, BellIcon } from 'lucide-react';
interface HRProfilePageProps {
  onBack: () => void;
}
const HRProfilePage: React.FC<HRProfilePageProps> = ({
  onBack
}) => {
  // This would typically come from a user context or props
  const userData = {
    name: 'Jordan Smith',
    email: 'jordan.smith@company.com',
    jobTitle: 'HR Manager',
    department: 'Human Resources',
    profileImage: null // No image for this example
  };
  const handleLogout = () => {
    // In a real app, this would handle logout logic
    // For now, just go back to the login screen
    window.localStorage.removeItem('onboardingComplete');
    window.location.reload();
  };
  return <div className="flex flex-col w-full min-h-full bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100" aria-label="Go back">
          <ArrowLeftIcon size={20} className="text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">HR Profile</h1>
        <div className="w-10"></div> {/* Spacer for balance */}
      </div>
      <div className="flex flex-col items-center p-6">
        {/* Profile Image */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
            <UserIcon size={40} className="text-purple-600" />
          </div>
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
            <p className="text-sm text-gray-500">Office Hours</p>
            <p className="text-gray-800">9:00 AM - 5:00 PM (Mon-Fri)</p>
          </div>
        </div>
        {/* Profile Options */}
        <div className="w-full space-y-3 mb-6">
          <button className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50">
            <div className="flex items-center">
              <SettingsIcon size={18} className="text-gray-500 mr-3" />
              <span className="text-gray-700">Settings</span>
            </div>
            <ArrowLeftIcon size={16} className="text-gray-400 transform rotate-180" />
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50">
            <div className="flex items-center">
              <BellIcon size={18} className="text-gray-500 mr-3" />
              <span className="text-gray-700">Notifications</span>
            </div>
            <ArrowLeftIcon size={16} className="text-gray-400 transform rotate-180" />
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50">
            <div className="flex items-center">
              <HelpCircleIcon size={18} className="text-gray-500 mr-3" />
              <span className="text-gray-700">Help & Support</span>
            </div>
            <ArrowLeftIcon size={16} className="text-gray-400 transform rotate-180" />
          </button>
        </div>
        {/* Logout Button */}
        <button onClick={handleLogout} className="w-full py-3 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mt-auto">
          <LogOutIcon size={18} className="mr-2" />
          Logout
        </button>
      </div>
    </div>;
};
export default HRProfilePage;