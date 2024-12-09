import React, { useState } from 'react';
import type { GameData } from '../types';

interface ManualEntryFormProps {
  onSubmit: (data: GameData) => void;
}

export const ManualEntryForm: React.FC<ManualEntryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<GameData>({
    kills: 0,
    damageDealt: 0,
    walkDistance: 0,
    swimDistance: 0,
    rideDistance: 0,
    headshotKills: 0,
    weaponsAcquired: 0,
    longestKill: 0,
    heals: 0,
    boosts: 0,
    revives: 0,
    assists: 0,
    matchType: 'solo',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'matchType' ? value : Number(value),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Match Type</label>
          <select
            name="matchType"
            value={formData.matchType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="solo">Solo</option>
            <option value="duo">Duo</option>
            <option value="squad">Squad</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Kills</label>
          <input
            type="number"
            name="kills"
            value={formData.kills}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Headshot Kills</label>
          <input
            type="number"
            name="headshotKills"
            value={formData.headshotKills}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Damage Dealt</label>
          <input
            type="number"
            name="damageDealt"
            value={formData.damageDealt}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Walk Distance</label>
          <input
            type="number"
            name="walkDistance"
            value={formData.walkDistance}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Swim Distance</label>
          <input
            type="number"
            name="swimDistance"
            value={formData.swimDistance}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ride Distance</label>
          <input
            type="number"
            name="rideDistance"
            value={formData.rideDistance}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Weapons Acquired</label>
          <input
            type="number"
            name="weaponsAcquired"
            value={formData.weaponsAcquired}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Longest Kill</label>
          <input
            type="number"
            name="longestKill"
            value={formData.longestKill}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Heals Used</label>
          <input
            type="number"
            name="heals"
            value={formData.heals}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Boosts Used</label>
          <input
            type="number"
            name="boosts"
            value={formData.boosts}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Revives</label>
          <input
            type="number"
            name="revives"
            value={formData.revives}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Assists</label>
          <input
            type="number"
            name="assists"
            value={formData.assists}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Analyze Match Data
      </button>
    </form>
  );
};