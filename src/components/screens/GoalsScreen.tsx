import React, { useState } from 'react';
import { TargetIcon, PlusIcon, CheckIcon, ClockIcon, ArrowUpIcon } from 'lucide-react';
const GoalsScreen: React.FC = () => {
  const [showNewGoalModal, setShowNewGoalModal] = useState(false);
  const activeGoal = {
    title: 'Complete Project Milestone',
    progress: 65,
    daysLeft: 7,
    tasks: [{
      id: '1',
      title: 'Finalize design',
      completed: true
    }, {
      id: '2',
      title: 'Implement core features',
      completed: true
    }, {
      id: '3',
      title: 'Write documentation',
      completed: false
    }, {
      id: '4',
      title: 'Conduct testing',
      completed: false
    }]
  };
  const recommendedGoals = [{
    id: '1',
    title: 'Improve Team Communication',
    category: 'Productivity',
    icon: '🚀',
    description: 'Establish regular check-ins and feedback sessions'
  }, {
    id: '2',
    title: 'Daily Meditation',
    category: 'Wellness',
    icon: '🧘',
    description: '10 minutes of mindfulness each morning'
  }, {
    id: '3',
    title: 'Learn New Framework',
    category: 'Skills',
    icon: '💻',
    description: 'Complete online course on React Native'
  }];
  const recentUpdates = [{
    id: '1',
    title: 'Completed task: Research competitors',
    time: '2 hours ago'
  }, {
    id: '2',
    title: 'Added new goal: Improve Team Communication',
    time: 'Yesterday'
  }, {
    id: '3',
    title: 'Reached 50% on Project Milestone',
    time: '2 days ago'
  }];
  const toggleNewGoalModal = () => {
    setShowNewGoalModal(!showNewGoalModal);
  };
  return <div className="flex flex-col w-full min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 text-white">
        <h1 className="text-xl font-bold mb-2">Goals</h1>
        <p className="text-sm text-blue-100">
          Track your progress and stay motivated
        </p>
      </div>
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex justify-between items-start mb-3">
            <h2 className="font-medium text-gray-800">{activeGoal.title}</h2>
            <div className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full flex items-center">
              <ClockIcon size={12} className="mr-1" />
              {activeGoal.daysLeft} days left
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="relative w-16 h-16 mr-3">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E5E7EB" strokeWidth="3" strokeDasharray="100, 100" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray={`${activeGoal.progress}, 100`} className="animate-progress" />
                <text x="18" y="20.5" textAnchor="middle" fontSize="9" fill="#3B82F6" fontWeight="bold">
                  {activeGoal.progress}%
                </text>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800 mb-1">
                Progress
              </div>
              <div className="text-xs text-gray-500 mb-2">
                {activeGoal.tasks.filter(t => t.completed).length} of{' '}
                {activeGoal.tasks.length} tasks completed
              </div>
              <div className="text-xs text-green-600 font-medium flex items-center">
                <ArrowUpIcon size={12} className="mr-1" />
                Keep it up! You're making great progress.
              </div>
            </div>
          </div>
          <div className="space-y-2 mb-3">
            {activeGoal.tasks.map(task => <div key={task.id} className="flex items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 ${task.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                  {task.completed && <CheckIcon size={12} />}
                </div>
                <span className={`text-sm ${task.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                  {task.title}
                </span>
              </div>)}
          </div>
        </div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-medium text-gray-800">Add New Goal</h2>
          <button onClick={toggleNewGoalModal} className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-200" aria-label="Add new goal">
            <PlusIcon size={18} />
          </button>
        </div>
        <div className="space-y-3 mb-6">
          {recommendedGoals.map(goal => <div key={goal.id} className="bg-white rounded-xl shadow-sm p-4 flex items-start hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl mr-3">
                {goal.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">{goal.title}</h3>
                    <p className="text-xs text-blue-600 mt-0.5">
                      {goal.category}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {goal.description}
                    </p>
                  </div>
                  <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200 group">
                    <span className="group-hover:hidden">Add</span>
                    <span className="hidden group-hover:inline">
                      + Add Goal
                    </span>
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-800 mb-3">
            Recent Updates
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="space-y-4">
              {recentUpdates.map((update, index) => <div key={update.id} className="relative pl-5">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-100"></div>
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800">
                      {update.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {update.time}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      {showNewGoalModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl max-w-xs w-full p-4 animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-800">Set New Goal</h3>
              <button onClick={toggleNewGoalModal} className="text-gray-500 hover:text-gray-700" aria-label="Close modal">
                ✕
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Goal Title
              </label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Enter goal title" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                <option>Productivity</option>
                <option>Wellness</option>
                <option>Skills</option>
                <option>Career</option>
                <option>Personal</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Target Date
              </label>
              <input type="date" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
            </div>
            <div className="flex space-x-2">
              <button onClick={toggleNewGoalModal} className="flex-1 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors duration-200">
                Cancel
              </button>
              <button onClick={toggleNewGoalModal} className="flex-1 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600 transition-colors duration-200">
                Create Goal
              </button>
            </div>
          </div>
        </div>}
    </div>;
};
export default GoalsScreen;