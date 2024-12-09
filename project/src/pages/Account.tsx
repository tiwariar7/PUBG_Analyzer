import React from 'react';
import { useAuthStore } from '../store/authStore';
import { BarChart, Clock, Trophy } from 'lucide-react';

export const Account: React.FC = () => {
  const { user } = useAuthStore();

  const recentAnalyses = [
    {
      date: '2024-03-15',
      matchType: 'Squad',
      performance: 'Above Average',
      kills: 8,
      placement: 2,
    },
    // Add more analyses as needed
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold mb-6">Welcome, {user?.username}</h1>
          
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart className="w-5 h-5 mr-2" />
              Performance Overview
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">75%</div>
                <div className="text-sm text-gray-600">Win Rate</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">4.5</div>
                <div className="text-sm text-gray-600">K/D Ratio</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">250</div>
                <div className="text-sm text-gray-600">Matches Played</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Recent Analyses
            </h2>
            <div className="space-y-4">
              {recentAnalyses.map((analysis, index) => (
                <div key={index} className="border-b pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{analysis.date}</span>
                    <span className="text-sm text-gray-600">{analysis.matchType}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-sm">
                      <span className="text-gray-600">Performance: </span>
                      <span className="font-medium">{analysis.performance}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Kills: </span>
                      <span className="font-medium">{analysis.kills}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Placement: </span>
                      <span className="font-medium">#{analysis.placement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Trophy className="w-5 h-5 mr-2" />
              Achievements
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <Trophy className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <div className="font-medium">Sharpshooter</div>
                  <div className="text-sm text-gray-600">10+ headshots in one match</div>
                </div>
              </div>
              {/* Add more achievements */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};