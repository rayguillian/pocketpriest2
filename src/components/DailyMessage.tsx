import React from 'react';

const DailyMessage: React.FC = () => {
  const username = '@jennsk0pke1418';
  const date = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const message = "You deserve relationships that are not codependent, minimizing, or controlling.";

  return (
    <div className="text-center space-y-6">
      <p className="text-sm">Good evening, {username}. It's {date}. Today at a glance:</p>
      <h2 className="text-2xl font-serif">{message}</h2>
      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
      <div className="flex justify-between text-sm">
        <div>
          <h3 className="font-bold">Do</h3>
          <ul>
            <li>Post-it notes</li>
            <li>Thought maps</li>
            <li>Visioning</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Don't</h3>
          <ul>
            <li>Reruns</li>
            <li>Overstatements</li>
            <li>Hodgepodge</li>
          </ul>
        </div>
      </div>
      <p className="text-xs uppercase">Daily Updates</p>
    </div>
  );
};

export default DailyMessage;