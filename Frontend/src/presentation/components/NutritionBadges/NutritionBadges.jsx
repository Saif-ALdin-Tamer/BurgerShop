import React from 'react';
import { Flame, Dumbbell, Zap } from 'lucide-react';
import './NutritionBadges.css';

export const NutritionBadges = ({ nutrition }) => {
  if (!nutrition) return null;

  return (
    <div className="nutrition-container glass-panel">
      <div className="nutrition-card">
        <div className="nutri-header">
          <Flame size={16} className="icon-calories" />
          <span className="nutri-label">Calories</span>
        </div>
        <span className="nutri-value">{nutrition.calories}</span>
        <span className="nutri-sub">Energy standard</span>
      </div>

      <div className="nutrition-card">
        <div className="nutri-header">
          <Zap size={16} className="icon-fat" />
          <span className="nutri-label">Fat & Carbs</span>
        </div>
        <span className="nutri-value">{nutrition.fat}</span>
        <span className="nutri-sub">Carbs {nutrition.carbs}</span>
      </div>

      <div className="nutrition-card">
        <div className="nutri-header">
          <Dumbbell size={16} className="icon-protein" />
          <span className="nutri-label">Protein</span>
        </div>
        <span className="nutri-value">{nutrition.protein}</span>
        <span className="nutri-sub">High muscle fuel</span>
      </div>
    </div>
  );
};
