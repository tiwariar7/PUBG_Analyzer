import type { GameData } from '../types';

interface AnalysisResult {
  performance: string;
  recommendations: string[];
  metrics: {
    killEfficiency: number;
    movementScore: number;
    survivalScore: number;
    supportScore: number;
  };
}

export function analyzeGameData(data: GameData): AnalysisResult {
  // Calculate key performance metrics
  const killEfficiency = calculateKillEfficiency(data);
  const movementScore = calculateMovementScore(data);
  const survivalScore = calculateSurvivalScore(data);
  const supportScore = calculateSupportScore(data);

  // Generate performance assessment
  const performance = assessPerformance(killEfficiency, movementScore, survivalScore, supportScore);

  // Generate recommendations
  const recommendations = generateRecommendations(data, {
    killEfficiency,
    movementScore,
    survivalScore,
    supportScore,
  });

  return {
    performance,
    recommendations,
    metrics: {
      killEfficiency,
      movementScore,
      survivalScore,
      supportScore,
    },
  };
}

function calculateKillEfficiency(data: GameData): number {
  const killScore = (data.kills * 2) + data.headshotKills;
  const efficiency = (killScore / Math.max(data.weaponsAcquired, 1)) * (data.damageDealt / 1000);
  return Math.min(Math.max(efficiency, 0), 100);
}

function calculateMovementScore(data: GameData): number {
  const totalDistance = data.walkDistance + data.swimDistance + data.rideDistance;
  const movementVariety = (data.walkDistance > 0 ? 1 : 0) +
                         (data.swimDistance > 0 ? 1 : 0) +
                         (data.rideDistance > 0 ? 1 : 0);
  return Math.min((totalDistance / 5000) * (movementVariety / 3) * 100, 100);
}

function calculateSurvivalScore(data: GameData): number {
  const healingEfficiency = ((data.heals + data.boosts) / Math.max(data.damageDealt / 100, 1)) * 50;
  return Math.min(healingEfficiency, 100);
}

function calculateSupportScore(data: GameData): number {
  const supportActions = data.assists + data.revives;
  return Math.min((supportActions / Math.max(data.kills, 1)) * 100, 100);
}

function assessPerformance(
  killEfficiency: number,
  movementScore: number,
  survivalScore: number,
  supportScore: number
): string {
  const overallScore = (killEfficiency + movementScore + survivalScore + supportScore) / 4;
  
  if (overallScore >= 80) return 'Exceptional';
  if (overallScore >= 60) return 'Above Average';
  if (overallScore >= 40) return 'Average';
  return 'Needs Improvement';
}

function generateRecommendations(
  data: GameData,
  metrics: {
    killEfficiency: number;
    movementScore: number;
    survivalScore: number;
    supportScore: number;
  }
): string[] {
  const recommendations: string[] = [];

  if (metrics.killEfficiency < 50) {
    recommendations.push('Focus on improving aim accuracy and weapon efficiency');
    if (data.headshotKills / data.kills < 0.2) {
      recommendations.push('Practice headshots to increase damage output');
    }
  }

  if (metrics.movementScore < 50) {
    recommendations.push('Increase map movement and utilize different transportation methods');
  }

  if (metrics.survivalScore < 50) {
    recommendations.push('Manage healing items more effectively and time their usage better');
  }

  if (metrics.supportScore < 50 && data.matchType !== 'solo') {
    recommendations.push('Focus more on team play by providing support and revives');
  }

  return recommendations;
}