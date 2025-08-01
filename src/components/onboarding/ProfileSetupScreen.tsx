import React, { useState } from 'react';
import { UserCircleIcon, CameraIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
interface ProfileSetupScreenProps {
  onNext: () => void;
  onBack: () => void;
}
const ProfileSetupScreen: React.FC<ProfileSetupScreenProps> = ({
  onNext,
  onBack
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [workSchedule, setWorkSchedule] = useState('');
  const departments = ['Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'Customer Support', 'HR', 'Finance', 'Operations'];
  const schedules = [{
    id: 'nine-to-five',
    label: 'Standard (9AM - 5PM)'
  }, {
    id: 'flexible',
    label: 'Flexible Hours'
  }, {
    id: 'early',
    label: 'Early Bird (6AM - 2PM)'
  }, {
    id: 'late',
    label: 'Night Owl (1PM - 9PM)'
  }];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };
  return <div className="flex flex-col min-h-full bg-gradient-to-b from-purple-50 to-white">
      {/* Header with back button and progress */}
      <div className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-sm z-10 px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100" aria-label="Go back">
          <ArrowLeftIcon size={20} className="text-gray-600" />
        </button>
        <div className="flex-1 flex justify-center">
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-purple-400 rounded-full" style={{
            width: '50%'
          }}></div>
          </div>
        </div>
        <div className="w-10"></div> {/* Spacer for balance */}
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Set up your profile
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Let's personalize your experience
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Photo Upload */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-purple-100 flex items-center justify-center">
                {profileImage ? <img src={profileImage} alt="Profile" className="w-full h-full object-cover" /> : <UserCircleIcon size={64} className="text-purple-300" />}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full"></div>
                <CameraIcon size={24} className="text-white z-10" />
              </div>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" onChange={e => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setProfileImage(reader.result as string);
                };
                reader.readAsDataURL(file);
              }
            }} />
              <div className="absolute bottom-0 right-0 bg-purple-500 rounded-full p-1.5 border-2 border-white">
                <CameraIcon size={14} className="text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Upload profile photo</p>
          </div>
          {/* Name & Designation */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your full name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" required />
            </div>
            <div>
              <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input id="designation" type="text" value={designation} onChange={e => setDesignation(e.target.value)} placeholder="e.g. Product Designer" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" required />
            </div>
          </div>
          {/* Department Selection */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select id="department" value={department} onChange={e => setDepartment(e.target.value)} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all appearance-none" required>
              <option value="" disabled>
                Select your department
              </option>
              {departments.map(dept => <option key={dept} value={dept}>
                  {dept}
                </option>)}
            </select>
          </div>
          {/* Work Schedule */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Work Schedule Preference
            </label>
            <div className="grid grid-cols-2 gap-3">
              {schedules.map(schedule => <button key={schedule.id} type="button" onClick={() => setWorkSchedule(schedule.id)} className={`py-3 px-4 border rounded-xl text-sm text-left transition-all ${workSchedule === schedule.id ? 'bg-purple-100 border-purple-300 text-purple-800' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                  {schedule.label}
                </button>)}
            </div>
          </div>
          <button type="submit" className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-xl transition-colors duration-200 flex items-center justify-center mt-4">
            Continue
            <ArrowRightIcon size={18} className="ml-1" />
          </button>
        </form>
      </div>
    </div>;
};
export default ProfileSetupScreen;