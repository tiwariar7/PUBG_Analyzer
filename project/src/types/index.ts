export interface GameData {
  kills: number;
  damageDealt: number;
  walkDistance: number;
  swimDistance: number;
  rideDistance: number;
  headshotKills: number;
  weaponsAcquired: number;
  longestKill: number;
  heals: number;
  boosts: number;
  revives: number;
  assists: number;
  matchType: string;
}

export interface Profile {
  username: string;
  totalMatches: number;
  averageKills: number;
  winRate: number;
}