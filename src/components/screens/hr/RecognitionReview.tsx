import React, { useState } from 'react';
import { ArrowLeftIcon, RefreshCwIcon, EditIcon, CheckIcon, XIcon, SaveIcon, LinkedinIcon, MailIcon, MessageSquareIcon } from 'lucide-react';
import HRBottomNavigation from '../../shared/HRBottomNavigation';
interface RecognitionReviewProps {
  onBack: () => void;
  employeeId?: string | null;
}
const RecognitionReview: React.FC<RecognitionReviewProps> = ({
  onBack,
  employeeId
}) => {
  const [activeScreen, setActiveScreen] = useState('awards');
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
  // Toggle states for sharing options
  const [shareEmail, setShareEmail] = useState(true);
  const [shareTeams, setShareTeams] = useState(true);
  const [shareLinkedIn, setShareLinkedIn] = useState(false);
  // Mock employee data
  const employee = {
    name: 'Sarah Johnson',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    title: 'Senior Product Designer',
    department: 'Design Team',
    confidence: 98
  };
  // Performance stats
  const performanceStats = [{
    title: 'Tasks Completed',
    value: 42,
    icon: '📋',
    color: 'blue'
  }, {
    title: 'Kudos Received',
    value: 18,
    icon: '👏',
    color: 'purple'
  }, {
    title: 'Ideas Submitted',
    value: 7,
    icon: '💡',
    color: 'yellow'
  }, {
    title: 'Team Score',
    value: '4.8/5',
    icon: '⭐',
    color: 'green'
  }];
  return <div className="flex flex-col w-full min-h-full bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-3 sticky top-0 z-10 shadow-sm flex items-center">
        <button className="p-2 rounded-full hover:bg-gray-100 mr-2" aria-label="Go back" onClick={onBack}>
          <ArrowLeftIcon size={20} className="text-gray-600" />
        </button>
        <h1 className="font-medium text-gray-800">Recognition Review</h1>
      </div>
      <div className="p-4 space-y-6">
        {/* Employee Details */}
        <section className="bg-white rounded-xl p-4 shadow-sm animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16">
            <div className="absolute transform rotate-45 bg-green-400 text-xs font-medium text-green-800 py-1 right-[-35px] top-[20px] w-[135px] text-center shadow-sm">
              Spot Award
            </div>
          </div>
          <div className="flex items-center">
            <img src={employee.photo} alt={employee.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-purple-200" />
            <div>
              <h2 className="text-lg font-medium text-gray-800">
                {employee.name}
              </h2>
              <p className="text-sm text-gray-600">{employee.title}</p>
              <p className="text-xs text-gray-500">{employee.department}</p>
              <div className="flex mt-1.5 space-x-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-1 animate-pulse"></span>
                  AI High Confidence {employee.confidence}%
                </span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  Design Excellence
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Recognition Reason */}
        <section className="bg-white rounded-xl p-4 shadow-sm animate-slide-up">
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-medium text-gray-800">Recognition Reason</h2>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
              Based on 3 data sources
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Sarah has consistently demonstrated exceptional design leadership on
            the mobile app redesign project. She delivered high-quality work
            ahead of schedule, mentored junior designers, and received
            outstanding feedback from both the product team and end users during
            usability testing.
          </p>
          <div className="flex space-x-2">
            <button className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs hover:bg-gray-200 transition-colors duration-200">
              <EditIcon size={14} className="mr-1" />
              Edit Text
            </button>
            <button className="flex items-center px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-xs hover:bg-purple-200 transition-colors duration-200">
              <RefreshCwIcon size={14} className="mr-1" />
              Regenerate
            </button>
          </div>
        </section>
        {/* Performance Stats */}
        <section>
          <h2 className="font-medium text-gray-800 mb-3">Performance Stats</h2>
          <div className="grid grid-cols-2 gap-3">
            {performanceStats.map((stat, index) => <div key={index} className="bg-white rounded-xl p-3 shadow-sm animate-scale-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${stat.color === 'blue' ? 'bg-blue-100' : stat.color === 'purple' ? 'bg-purple-100' : stat.color === 'yellow' ? 'bg-yellow-100' : 'bg-green-100'}`}>
                    <span className="text-xl">{stat.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">{stat.title}</h3>
                    <span className={`text-lg font-bold ${stat.color === 'blue' ? 'text-blue-600' : stat.color === 'purple' ? 'text-purple-600' : stat.color === 'yellow' ? 'text-yellow-600' : 'text-green-600'}`}>
                      {stat.value}
                    </span>
                  </div>
                </div>
              </div>)}
          </div>
        </section>
        {/* Share Recognition */}
        <section className="bg-white rounded-xl p-4 shadow-sm animate-slide-up">
          <h2 className="font-medium text-gray-800 mb-3">Share Recognition</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MailIcon size={18} className="text-gray-500 mr-3" />
                <span className="text-sm text-gray-700">Company Email</span>
              </div>
              <div className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${shareEmail ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'}`} onClick={() => setShareEmail(!shareEmail)}>
                <div className="w-5 h-5 rounded-full bg-white shadow m-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MessageSquareIcon size={18} className="text-gray-500 mr-3" />
                <span className="text-sm text-gray-700">Microsoft Teams</span>
              </div>
              <div className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${shareTeams ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'}`} onClick={() => setShareTeams(!shareTeams)}>
                <div className="w-5 h-5 rounded-full bg-white shadow m-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <LinkedinIcon size={18} className="text-gray-500 mr-3" />
                <span className="text-sm text-gray-700">LinkedIn</span>
              </div>
              <div className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${shareLinkedIn ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'}`} onClick={() => setShareLinkedIn(!shareLinkedIn)}>
                <div className="w-5 h-5 rounded-full bg-white shadow m-0.5"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Action Buttons */}
        <section className="flex space-x-2">
          <button className="flex-1 flex items-center justify-center py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-colors duration-200 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white opacity-10 scale-0 animate-ping"></div>
            </div>
            <CheckIcon size={18} className="mr-2" />
            Approve & Publish
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-xl transition-colors duration-200">
            <SaveIcon size={18} className="mr-2" />
            Save Draft
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-red-100 hover:bg-red-200 text-red-600 font-medium rounded-xl transition-colors duration-200">
            <XIcon size={18} />
          </button>
        </section>
      </div>
      {/* HR Bottom Navigation */}
      <HRBottomNavigation activeScreen={activeScreen} setActiveScreen={setActiveScreen} onVoiceAssistant={() => setShowVoiceAssistant(true)} />
    </div>;
};
export default RecognitionReview;