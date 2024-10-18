import React, { useState } from 'react';
import { Book, Users, ShoppingBag, User, Home } from 'lucide-react';
import Header from './components/Header';
import DailyMessage from './components/DailyMessage';
import Navigation from './components/Navigation';
import ChatbotPriest from './components/ChatbotPriest';
import BibleQuiz from './components/BibleQuiz';
import RelationshipReport from './components/RelationshipReport';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <DailyMessage />;
      case 'friends':
        return <RelationshipReport />;
      case 'void':
        return <ChatbotPriest />;
      case 'shop':
        return <BibleQuiz />;
      case 'you':
        return <div className="text-center text-white">Your profile and settings</div>;
      default:
        return <DailyMessage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto p-4">
        {renderContent()}
      </main>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;