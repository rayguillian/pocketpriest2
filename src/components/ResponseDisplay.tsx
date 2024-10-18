import React from 'react';
import { Scroll } from 'lucide-react';

interface ResponseDisplayProps {
  response: string;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response }) => {
  return (
    <div className="bg-purple-100 rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
        <Scroll className="mr-2" />
        The Oracle Speaks:
      </h2>
      <p className="text-gray-800 italic leading-relaxed">{response}</p>
    </div>
  );
};

export default ResponseDisplay;