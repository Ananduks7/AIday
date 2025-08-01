import React, { useState } from 'react';
import { BrainCircuitIcon, XIcon } from 'lucide-react';
interface Suggestion {
  id: string;
  title: string;
  description: string;
}
interface AISuggestionsProps {
  suggestions: Suggestion[];
}
const AISuggestions: React.FC<AISuggestionsProps> = ({
  suggestions
}) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const openModal = (id: string) => {
    setActiveModal(id);
  };
  const closeModal = () => {
    setActiveModal(null);
  };
  return <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-700">AI Suggestions</h3>
        <BrainCircuitIcon size={18} className="text-indigo-500" />
      </div>
      <div className="flex overflow-x-auto pb-2 -mx-1 space-x-2">
        {suggestions.map(suggestion => <button key={suggestion.id} onClick={() => openModal(suggestion.id)} className="flex-shrink-0 bg-indigo-50 rounded-lg px-3 py-2 min-w-[120px] text-left hover:bg-indigo-100 transition-colors duration-200">
            <h4 className="text-sm font-medium text-indigo-700 mb-1">
              {suggestion.title}
            </h4>
            <p className="text-xs text-indigo-600 opacity-70 line-clamp-2">
              {suggestion.description}
            </p>
          </button>)}
      </div>
      {activeModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl max-w-xs w-full p-4 animate-scale-in">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-800">
                {suggestions.find(s => s.id === activeModal)?.title}
              </h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700" aria-label="Close modal">
                <XIcon size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {suggestions.find(s => s.id === activeModal)?.description}
            </p>
            <div className="flex space-x-2">
              <button onClick={closeModal} className="flex-1 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors duration-200">
                Dismiss
              </button>
              <button onClick={closeModal} className="flex-1 py-2 rounded-lg bg-indigo-500 text-white text-sm hover:bg-indigo-600 transition-colors duration-200">
                Take Action
              </button>
            </div>
          </div>
        </div>}
    </div>;
};
export default AISuggestions;