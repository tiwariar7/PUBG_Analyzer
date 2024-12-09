import React from 'react';
import { FileType } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About PUBG Performance Analytics</h1>
      
      <div className="prose prose-lg">
        <p className="mb-4">
          PUBG Performance Analytics is a powerful tool designed to help players analyze and improve
          their gameplay performance in PlayerUnknown's Battlegrounds (PUBG).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Upload your match data through CSV or JSON files, or enter it manually</li>
          <li>Our analytics engine processes your gameplay statistics</li>
          <li>Receive detailed insights and personalized recommendations</li>
          <li>Track your progress over time and identify areas for improvement</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">File Format Requirements</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <div className="flex items-start mb-4">
            <FileType className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">CSV Format</h3>
              <pre className="bg-white p-4 rounded-md text-sm overflow-x-auto">
                kills,damageDealt,walkDistance,swimDistance,rideDistance,headshotKills,weaponsAcquired,longestKill,heals,boosts,revives,assists,matchType
                5,500,1500,0,2000,2,4,150,3,2,1,2,squad
              </pre>
            </div>
          </div>

          <div className="flex items-start">
            <FileType className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">JSON Format</h3>
              <pre className="bg-white p-4 rounded-md text-sm overflow-x-auto">
{`{
  "kills": 5,
  "damageDealt": 500,
  "walkDistance": 1500,
  "swimDistance": 0,
  "rideDistance": 2000,
  "headshotKills": 2,
  "weaponsAcquired": 4,
  "longestKill": 150,
  "heals": 3,
  "boosts": 2,
  "revives": 1,
  "assists": 2,
  "matchType": "squad"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};