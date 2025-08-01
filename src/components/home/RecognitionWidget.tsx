import React, { useState } from 'react';
import { AwardIcon, SendIcon } from 'lucide-react';
interface Kudos {
  id: string;
  sender: string;
  message: string;
  senderPhoto: string;
}
interface RecognitionWidgetProps {
  kudos: Kudos[];
}
const RecognitionWidget: React.FC<RecognitionWidgetProps> = ({
  kudos
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const handleSendKudos = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };
  return <div className="bg-white rounded-xl shadow-sm p-4 relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-700">Recognition</h3>
        <AwardIcon size={18} className="text-purple-500" />
      </div>
      {kudos.length > 0 ? kudos.map(kudo => <div key={kudo.id} className="mb-4">
            <div className="flex items-center mb-2">
              <img src={kudo.senderPhoto} alt={kudo.sender} className="w-8 h-8 rounded-full mr-2 object-cover" />
              <span className="text-sm font-medium">{kudo.sender}</span>
            </div>
            <p className="text-sm text-gray-600 mb-3 pl-10">{kudo.message}</p>
          </div>) : <p className="text-sm text-gray-500 mb-4">No recent recognition.</p>}
      <button onClick={handleSendKudos} className="flex items-center justify-center w-full py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors duration-200">
        <SendIcon size={16} className="mr-1" />
        <span>Send Kudos</span>
      </button>
      {showConfetti && <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 animate-fall-slow text-2xl">
            🎉
          </div>
          <div className="absolute top-0 left-1/2 animate-fall-medium text-2xl">
            👏
          </div>
          <div className="absolute top-0 right-1/4 animate-fall-fast text-2xl">
            🎊
          </div>
          <div className="absolute top-10 left-1/3 animate-fall-medium text-2xl">
            🎉
          </div>
          <div className="absolute top-10 right-1/3 animate-fall-slow text-2xl">
            👏
          </div>
        </div>}
    </div>;
};
export default RecognitionWidget;