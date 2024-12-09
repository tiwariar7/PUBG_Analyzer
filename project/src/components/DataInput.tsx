import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { ManualEntryForm } from './ManualEntryForm';
import { AnalysisResults } from './AnalysisResults';
import { analyzeGameData } from '../services/gameAnalytics';
import type { GameData } from '../types';
import { FileText, PenTool } from 'lucide-react';

export const DataInput: React.FC = () => {
  const [inputMethod, setInputMethod] = useState<'file' | 'manual'>('file');
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  const handleFileUpload = async (file: File) => {
    try {
      const text = await file.text();
      const data = file.type === 'application/json' 
        ? JSON.parse(text)
        : parseCSV(text);
      
      // Process the first entry if it's an array
      const gameData = Array.isArray(data) ? data[0] : data;
      const results = analyzeGameData(gameData);
      setAnalysisResults(results);
    } catch (error) {
      console.error('Error processing file:', error);
      alert('Error processing file. Please ensure it matches the required format.');
    }
  };

  const parseCSV = (text: string): GameData => {
    const lines = text.split('\n');
    const headers = lines[0].split(',');
    const values = lines[1].split(',');
    
    return headers.reduce((obj: any, header, index) => {
      const value = values[index]?.trim();
      obj[header.trim()] = isNaN(Number(value)) ? value : Number(value);
      return obj;
    }, {});
  };

  const handleManualSubmit = (data: GameData) => {
    const results = analyzeGameData(data);
    setAnalysisResults(results);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setInputMethod('file')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              inputMethod === 'file'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FileText className="w-5 h-5 mr-2" />
            File Upload
          </button>
          <button
            onClick={() => setInputMethod('manual')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              inputMethod === 'manual'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <PenTool className="w-5 h-5 mr-2" />
            Manual Entry
          </button>
        </div>

        {inputMethod === 'file' ? (
          <FileUpload
            onFileUpload={handleFileUpload}
            acceptedFileTypes={['.csv', '.json']}
          />
        ) : (
          <ManualEntryForm onSubmit={handleManualSubmit} />
        )}
      </div>

      {analysisResults && (
        <div className="mt-8">
          <AnalysisResults results={analysisResults} />
        </div>
      )}
    </div>
  );
};