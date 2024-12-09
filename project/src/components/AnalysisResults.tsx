import React from 'react';
import { BarChart2, Award, AlertTriangle } from 'lucide-react';
import type { AnalysisResult } from '../services/gameAnalytics';

interface AnalysisResultsProps {
  results: AnalysisResult;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results }) => {
  const getMetricColor = (value: number) => {
    if (value >= 80) return 'text-green-600';
    if (value >= 60) return 'text-blue-600';
    if (value >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <Award className="w-6 h-6 mr-2 text-blue-600" />
          Performance Analysis
        </h2>
        <div className="text-lg font-medium text-gray-700">
          Overall Performance: <span className="text-blue-600">{results.performance}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.entries(results.metrics).map(([key, value]) => (
          <div key={key} className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
            <div className={`text-2xl font-bold ${getMetricColor(value)}`}>
              {Math.round(value)}%
            </div>
          </div>
        ))}
      </div>

      {results.recommendations.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
            Recommendations
          </h3>
          <ul className="space-y-2">
            {results.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                {recommendation}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};