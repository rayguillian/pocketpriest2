import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';

interface DilemmaFormProps {
  onSubmit: (dilemma: string) => void;
  loading: boolean;
}

const DilemmaForm: React.FC<DilemmaFormProps> = ({ onSubmit, loading }) => {
  const [dilemma, setDilemma] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dilemma.trim()) {
      onSubmit(dilemma);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <label htmlFor="dilemma" className="block text-sm font-medium text-gray-700 mb-2">
        Enter your dilemma:
      </label>
      <textarea
        id="dilemma"
        value={dilemma}
        onChange={(e) => setDilemma(e.target.value)}
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
        rows={4}
        placeholder="Describe your dilemma here..."
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center w-full transition duration-300"
      >
        {loading ? (
          <>
            <Loader className="animate-spin mr-2" />
            Analyzing...
          </>
        ) : (
          <>
            <Send className="mr-2" />
            Seek Wisdom
          </>
        )}
      </button>
    </form>
  );
};

export default DilemmaForm;