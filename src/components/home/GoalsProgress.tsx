import React, { useState } from 'react';
import { TargetIcon, ChevronDownIcon, ChevronUpIcon, CheckIcon } from 'lucide-react';
interface Goal {
  id: string;
  title: string;
  progress: number;
}
interface GoalsProgressProps {
  goals: Goal[];
}
const GoalsProgress: React.FC<GoalsProgressProps> = ({
  goals
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const overallProgress = goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length;
  return <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium text-gray-700">Quarterly Goals</h3>
        <button onClick={toggleExpand} className="text-gray-500 hover:text-gray-700" aria-label={isExpanded ? 'Collapse' : 'Expand'}>
          {isExpanded ? <ChevronUpIcon size={18} /> : <ChevronDownIcon size={18} />}
        </button>
      </div>
      <div className="flex items-center mb-3">
        <TargetIcon size={18} className="text-orange-500 mr-2" />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm font-medium">
              {Math.round(overallProgress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-orange-500 h-2 rounded-full transition-all duration-500 ease-out" style={{
            width: `${overallProgress}%`
          }}></div>
          </div>
        </div>
      </div>
      <div className={`space-y-3 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        {goals.map(goal => <div key={goal.id} className="pl-6">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                {goal.progress === 100 ? <CheckIcon size={14} className="text-green-500 mr-1" /> : <div className="w-3 h-3 rounded-full border border-gray-300 mr-1"></div>}
                <span className="text-sm">{goal.title}</span>
              </div>
              <span className="text-xs font-medium">{goal.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 ml-4">
              <div className={`h-1.5 rounded-full transition-all duration-500 ease-out ${goal.progress === 100 ? 'bg-green-500' : 'bg-orange-500'}`} style={{
            width: `${goal.progress}%`
          }}></div>
            </div>
          </div>)}
      </div>
    </div>;
};
export default GoalsProgress;