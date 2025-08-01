import React, { useState } from 'react';
import { AwardIcon, ShareIcon, DownloadIcon } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
const RecognitionScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const tabs = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'professional',
    label: 'Professional'
  }, {
    id: 'academic',
    label: 'Academic'
  }, {
    id: 'industry',
    label: 'Industry'
  }];
  const achievements = [{
    id: '1',
    title: 'Excellence in Innovation 2023',
    organization: 'Tech Leaders Association',
    date: 'Nov 2023',
    category: 'professional',
    isHighlighted: true,
    description: 'Awarded for exceptional contributions to product innovation and technological advancement.'
  }, {
    id: '2',
    title: 'Team Collaboration Award',
    organization: 'Internal Recognition',
    date: 'Oct 2023',
    category: 'professional',
    isHighlighted: false
  }, {
    id: '3',
    title: 'Advanced Data Science Certification',
    organization: 'Data Science Academy',
    date: 'Sep 2023',
    category: 'academic',
    isHighlighted: false
  }, {
    id: '4',
    title: 'Industry Speaker',
    organization: 'Future of Work Conference',
    date: 'Aug 2023',
    category: 'industry',
    isHighlighted: false
  }];
  const filteredAchievements = activeTab === 'all' ? achievements : achievements.filter(a => a.category === activeTab);
  const [expandedAchievement, setExpandedAchievement] = useState<string | null>(null);
  const toggleExpand = (id: string) => {
    setExpandedAchievement(expandedAchievement === id ? null : id);
  };
  // Growth data for the chart
  const growthData = [{
    month: 'Jan',
    achievements: 2,
    points: 20
  }, {
    month: 'Feb',
    achievements: 3,
    points: 35
  }, {
    month: 'Mar',
    achievements: 2,
    points: 25
  }, {
    month: 'Apr',
    achievements: 5,
    points: 60
  }, {
    month: 'May',
    achievements: 3,
    points: 40
  }, {
    month: 'Jun',
    achievements: 6,
    points: 75
  }, {
    month: 'Jul',
    achievements: 4,
    points: 55
  }, {
    month: 'Aug',
    achievements: 7,
    points: 80
  }, {
    month: 'Sep',
    achievements: 5,
    points: 65
  }, {
    month: 'Oct',
    achievements: 8,
    points: 90
  }, {
    month: 'Nov',
    achievements: 7,
    points: 85
  }, {
    month: 'Dec',
    achievements: 9,
    points: 95
  }];
  return <div className="flex flex-col w-full min-h-full bg-white">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4">
        <h1 className="text-xl font-bold mb-4">Recognition & Awards</h1>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <AwardIcon size={24} className="text-white" />
            </div>
            <div className="ml-3">
              <div className="text-sm opacity-80">Total Achievements</div>
              <div className="text-2xl font-bold">{achievements.length}</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200">
              <ShareIcon size={18} className="text-white" />
            </button>
            <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200">
              <DownloadIcon size={18} className="text-white" />
            </button>
          </div>
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2 -mx-1">
          {tabs.map(tab => <button key={tab.id} className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors duration-200 ${activeTab === tab.id ? 'bg-white text-indigo-600 font-medium' : 'bg-transparent text-white bg-opacity-20 hover:bg-white hover:bg-opacity-10'}`} onClick={() => setActiveTab(tab.id)}>
              {tab.label}
            </button>)}
        </div>
      </div>
      <div className="p-4 flex-1">
        {filteredAchievements.map(achievement => <div key={achievement.id} className={`mb-4 rounded-xl border overflow-hidden transition-all duration-300 ${achievement.isHighlighted ? 'border-purple-200 bg-purple-50' : 'border-gray-200 bg-white'} ${expandedAchievement === achievement.id ? 'shadow-md' : 'hover:shadow-sm'}`}>
            <div className="p-4 cursor-pointer" onClick={() => toggleExpand(achievement.id)}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-medium ${achievement.isHighlighted ? 'text-purple-700' : 'text-gray-800'}`}>
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {achievement.organization} • {achievement.date}
                  </p>
                </div>
                {achievement.isHighlighted && <div className="bg-purple-100 p-1 rounded-full">
                    <AwardIcon size={16} className="text-purple-600" />
                  </div>}
              </div>
              {expandedAchievement === achievement.id && achievement.description && <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-600 animate-fade-in">
                    {achievement.description}
                  </div>}
            </div>
          </div>)}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Recognition Growth
          </h3>
          <div className="bg-white border border-gray-200 rounded-xl p-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData} margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0
            }}>
                <defs>
                  <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorAchievements" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{
                fontSize: 10,
                fill: '#6b7280'
              }} tickLine={false} axisLine={false} />
                <YAxis tick={{
                fontSize: 10,
                fill: '#6b7280'
              }} tickLine={false} axisLine={false} tickFormatter={value => `${value}`} />
                <Tooltip contentStyle={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }} itemStyle={{
                padding: '2px 0'
              }} labelStyle={{
                fontWeight: 'bold',
                marginBottom: '4px'
              }} />
                <Area type="monotone" dataKey="points" stroke="#8884d8" fillOpacity={1} fill="url(#colorPoints)" strokeWidth={2} name="Recognition Points" />
                <Area type="monotone" dataKey="achievements" stroke="#82ca9d" fillOpacity={1} fill="url(#colorAchievements)" strokeWidth={2} name="Achievements" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>;
};
export default RecognitionScreen;