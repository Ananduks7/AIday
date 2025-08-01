import React, { useState } from 'react';
import { BellIcon, TrendingUpIcon, UserIcon, AwardIcon, CheckIcon, ExternalLinkIcon, ShareIcon, LinkedinIcon, MessageSquareIcon } from 'lucide-react';
import HRBottomNavigation from '../../shared/HRBottomNavigation';
import RecognitionReview from './RecognitionReview';
import HRProfilePage from './HRProfilePage';
const HRDashboard: React.FC = () => {
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
  const [activeScreen, setActiveScreen] = useState('home');
  const [showRecognitionReview, setShowRecognitionReview] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });
  // Navigate to recognition review screen
  const handleViewProfile = (employeeId: string) => {
    setSelectedEmployeeId(employeeId);
    setShowRecognitionReview(true);
  };
  // If profile is active, show HR profile page
  if (showProfile) {
    return <HRProfilePage onBack={() => setShowProfile(false)} />;
  }
  // If recognition review is active, show that screen
  if (showRecognitionReview) {
    return <RecognitionReview onBack={() => setShowRecognitionReview(false)} employeeId={selectedEmployeeId} />;
  }
  // Mock data for the dashboard
  const insightsData = [{
    title: 'Team Productivity',
    value: '87%',
    change: '+3%',
    color: 'blue'
  }, {
    title: 'Wellness Score',
    value: '92%',
    change: '+5%',
    color: 'green'
  }, {
    title: 'Recognition Rate',
    value: '78%',
    change: '+2%',
    color: 'purple'
  }];
  const topContributors = [{
    id: '1',
    name: 'Alex Chen',
    score: 97,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg'
  }, {
    id: '2',
    name: 'Sarah Johnson',
    score: 94,
    photo: 'https://randomuser.me/api/portraits/women/44.jpg'
  }, {
    id: '3',
    name: 'Michael Kim',
    score: 92,
    photo: 'https://randomuser.me/api/portraits/men/22.jpg'
  }, {
    id: '4',
    name: 'Emma Wilson',
    score: 89,
    photo: 'https://randomuser.me/api/portraits/women/29.jpg'
  }];
  const spotAwardRecommendations = [{
    id: '1',
    name: 'Rachel Lee',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    reason: 'Exceeded deadline by delivering project 2 days early with excellent quality',
    confidence: 98
  }, {
    id: '2',
    name: 'David Park',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
    reason: 'Consistently high collaboration score and mentoring junior team members',
    confidence: 96
  }];
  const teamPerformance = [{
    title: 'Task Completion',
    value: '92%',
    icon: '📋'
  }, {
    title: 'Collaboration',
    value: '87%',
    icon: '👥'
  }, {
    title: 'Wellness Goals',
    value: '83%',
    icon: '🌱'
  }, {
    title: 'Project Delivery',
    value: '95%',
    icon: '🚀'
  }];
  return <div className="flex flex-col w-full min-h-full bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-3 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 cursor-pointer hover:bg-purple-200 transition-colors duration-200" onClick={() => setShowProfile(true)}>
              <UserIcon size={20} className="text-purple-600" />
            </div>
            <div>
              <h1 className="font-medium text-gray-800">Welcome, Jordan</h1>
              <p className="text-xs text-gray-500">HR Manager</p>
            </div>
          </div>
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
              <BellIcon size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-500">{formattedDate}</div>
      </div>
      <div className="p-4 space-y-6">
        {/* AI Insights Panel */}
        <section className="animate-fade-in">
          <h2 className="font-medium text-gray-800 mb-3 flex items-center">
            <span className="text-purple-600 mr-1">AI</span> Insights
            <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">
              Updated Now
            </span>
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {insightsData.map((insight, index) => <div key={index} className="bg-white rounded-xl p-3 shadow-sm animate-scale-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <h3 className="text-xs text-gray-500 mb-1">{insight.title}</h3>
                <div className="flex items-end">
                  <span className={`text-xl font-bold ${insight.color === 'blue' ? 'text-blue-600' : insight.color === 'green' ? 'text-green-600' : 'text-purple-600'}`}>
                    {insight.value}
                  </span>
                  <span className="text-xs text-green-600 ml-1 mb-0.5">
                    {insight.change}
                  </span>
                </div>
              </div>)}
          </div>
        </section>
        {/* Top Contributors */}
        <section>
          <h2 className="font-medium text-gray-800 mb-3">Top Contributors</h2>
          <div className="flex overflow-x-auto space-x-3 pb-2 -mx-1">
            {topContributors.map((contributor, index) => <div key={contributor.id} className="flex-shrink-0 bg-white rounded-xl p-3 shadow-sm w-36 animate-slide-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="flex flex-col items-center">
                  <img src={contributor.photo} alt={contributor.name} className="w-14 h-14 rounded-full object-cover mb-2 border-2 border-purple-100" />
                  <h3 className="font-medium text-sm text-center">
                    {contributor.name}
                  </h3>
                  <div className="mt-1 px-2 py-0.5 bg-purple-100 rounded-full">
                    <span className="text-xs font-medium text-purple-700">
                      {contributor.score} Score
                    </span>
                  </div>
                </div>
              </div>)}
          </div>
        </section>
        {/* Spot Award Recommendations */}
        <section>
          <h2 className="font-medium text-gray-800 mb-3">
            Spot Award Recommendations
          </h2>
          <div className="space-y-3">
            {spotAwardRecommendations.map((recommendation, index) => <div key={recommendation.id} className="bg-white rounded-xl p-4 shadow-sm relative overflow-hidden animate-slide-in-bottom" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute transform rotate-45 bg-yellow-400 text-xs font-medium text-yellow-800 py-1 right-[-35px] top-[20px] w-[135px] text-center shadow-sm">
                    AI Confidence {recommendation.confidence}%
                  </div>
                </div>
                <div className="flex items-start">
                  <img src={recommendation.photo} alt={recommendation.name} className="w-12 h-12 rounded-full object-cover mr-3" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">
                      {recommendation.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {recommendation.reason}
                    </p>
                    <div className="flex mt-3 space-x-2">
                      <button className="flex items-center px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition-colors duration-200">
                        <CheckIcon size={14} className="mr-1" />
                        Approve
                      </button>
                      <button className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors duration-200" onClick={() => handleViewProfile(recommendation.id)}>
                        <ExternalLinkIcon size={14} className="mr-1" />
                        View Profile
                      </button>
                    </div>
                  </div>
                  <div className="ml-2 mt-1">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center animate-pulse-slow">
                      <AwardIcon size={16} className="text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </section>
        {/* Team Performance Overview */}
        <section>
          <h2 className="font-medium text-gray-800 mb-3">
            Team Performance Overview
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {teamPerformance.map((metric, index) => <div key={index} className="bg-white rounded-xl p-3 shadow-sm animate-scale-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                    <span className="text-xl">{metric.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">{metric.title}</h3>
                    <span className="text-lg font-bold text-gray-800">
                      {metric.value}
                    </span>
                  </div>
                </div>
              </div>)}
          </div>
        </section>
        {/* Latest Recognition Post */}
        <section>
          <h2 className="font-medium text-gray-800 mb-3">Latest Recognition</h2>
          <div className="bg-white rounded-xl p-4 shadow-sm animate-fade-in">
            <div className="flex items-start mb-3">
              <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Employee" className="w-12 h-12 rounded-full object-cover mr-3" />
              <div>
                <h3 className="font-medium text-gray-800">Lisa Wang</h3>
                <p className="text-sm text-gray-600">
                  Excellence in Customer Support
                </p>
                <div className="flex mt-1">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full mr-1">
                    Support Team
                  </span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    5-Star Rating
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                  <LinkedinIcon size={16} className="text-blue-600" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                  <MessageSquareIcon size={16} className="text-purple-600" />
                </button>
              </div>
              <button className="flex items-center px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm hover:bg-purple-200 transition-colors duration-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500 opacity-40 animate-pulse"></div>
                <ShareIcon size={14} className="mr-1" />
                Post Recognition
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* HR Bottom Navigation */}
      <HRBottomNavigation activeScreen={activeScreen} setActiveScreen={setActiveScreen} onVoiceAssistant={() => setShowVoiceAssistant(true)} />
    </div>;
};
export default HRDashboard;