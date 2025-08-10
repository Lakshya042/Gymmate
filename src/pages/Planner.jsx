import React, { useState } from 'react';
import MealPlanner from '../components/MealPlanner';

const Planner = () => {
  const [meals] = useState(() => JSON.parse(localStorage.getItem('meals'))||[]);
  const [plans] = useState(() => JSON.parse(localStorage.getItem('plans'))||{});
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Weekly Planner</h1>
      <MealPlanner meals={meals} />
    </div>
  );
};
export default Planner;