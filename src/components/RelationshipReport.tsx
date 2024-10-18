import React from 'react';
import { Heart } from 'lucide-react';

const RelationshipReport: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <img src="https://via.placeholder.com/40" alt="User" className="rounded-full mr-2" />
          <div>
            <h3 className="font-bold">Zachery @zacheryjorgensen29</h3>
            <p className="text-sm">♌ Leo ♑ Capricorn ♎ Libra</p>
          </div>
        </div>
        <p className="mb-2">People break Zachery's heart by alluding to any part of their life before they met you.</p>
        <p>People break your heart by letting the banter die.</p>
        <button className="mt-2 flex items-center text-red-500">
          <Heart size={16} className="mr-1" />
          VIEW ZACHERY'S RELATIONSHIP REPORT
        </button>
      </div>
      <div className="text-center">
        <p className="text-2xl font-serif mb-2">30,000,000 people are already on Co-Star.</p>
        <div className="flex justify-center space-x-2">
          <div className="bg-gray-900 p-2 rounded transform -rotate-6">
            <h4 className="font-bold">Compatibility</h4>
            <p className="text-xs">INTELLECT & COMM</p>
            <p className="text-xs">Cancer — Virgo ♍</p>
          </div>
          <div className="bg-gray-900 p-2 rounded transform rotate-6">
            <img src="https://via.placeholder.com/30" alt="User" className="rounded-full mb-1" />
            <p className="text-xs">Sara @scorpiosara33</p>
            <p className="text-xs">♏ Scorpio ♋ Cancer ♊ Gemini</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelationshipReport;