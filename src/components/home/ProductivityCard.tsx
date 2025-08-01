import React, { useState } from 'react';
import { BarChart2Icon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface ProductivityCardProps {
  score: number;
}
const ProductivityCard: React.FC<ProductivityCardProps> = ({
  score
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return <div className={`bg-white rounded-xl shadow-sm p-4 transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-auto'}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-gray-700">Productivity</h3>
        <button onClick={toggleExpand} className="text-gray-500 hover:text-gray-700" aria-label={isExpanded ? 'Collapse' : 'Expand'}>
          {isExpanded ? <ChevronUpIcon size={18} /> : <ChevronDownIcon size={18} />}
        </button>
      </div>
      <div className="flex items-end space-x-2 mb-2">
        <span className="text-2xl font-bold text-blue-600">{score}%</span>
        <span className="text-xs text-green-600 pb-1">↑ 5%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <div className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out" style={{
        width: `${score}%`
      }}></div>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-2 border-t border-gray-100">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Peak Focus Hours
          </h4>
          <div className="flex items-center">
            <BarChart2Icon size={16} className="text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">10:00 AM - 12:00 PM</span>
          </div>
          <h4 className="text-sm font-medium text-gray-700 mt-3 mb-2">
            Insights
          </h4>
          <p className="text-xs text-gray-600">
            You're most productive in the morning. Try scheduling important
            tasks during this time.
          </p>
        </div>
      </div>
    </div>;
};
export default ProductivityCard;