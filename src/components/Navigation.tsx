import React from 'react';
import { Home, Users, Zap, ShoppingBag, User } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'home', icon: Home },
    { name: 'friends', icon: Users },
    { name: 'void', icon: Zap },
    { name: 'shop', icon: ShoppingBag },
    { name: 'you', icon: User },
  ];

  return (
    <nav className="bg-black text-white flex justify-around items-center p-4">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`flex flex-col items-center ${activeTab === tab.name ? 'text-white' : 'text-gray-500'}`}
        >
          <tab.icon size={24} />
          <span className="text-xs uppercase">{tab.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;