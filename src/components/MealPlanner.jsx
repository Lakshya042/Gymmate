import React, { useState, useEffect } from 'react';
import WeekSelector from './WeekSelector';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];

const MealPlanner = ({ meals }) => {
  const [currentWeek, setCurrentWeek] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('currentWeek'));
    return saved || new Date().toISOString().slice(0, 10);
  });

  const [plan, setPlan] = useState(() => JSON.parse(localStorage.getItem('plans')) || {});

  useEffect(() => {
    localStorage.setItem('plans', JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem('currentWeek', JSON.stringify(currentWeek));
  }, [currentWeek]);

  const assignMeal = (day, type, mealId) => {
    setPlan((prev) => ({
      ...prev,
      [currentWeek]: {
        ...(prev[currentWeek] || {}),
        [day]: {
          ...(prev[currentWeek]?.[day] || {}),
          [type]: mealId
        }
      }
    }));
  };

  const weekPlan = plan[currentWeek] || {};

  return (
    <div>
      <WeekSelector currentWeek={currentWeek} setCurrentWeek={setCurrentWeek} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {days.map((day) => (
          <div key={day} className="bg-white p-4 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-green-700 mb-4">{day}</h4>
            {mealTypes.map((type) => (
              <div key={type} className="mb-4">
                <label className="block font-medium mb-1 text-gray-700">{type}</label>
                <select
                  value={weekPlan[day]?.[type] || ''}
                  onChange={(e) => assignMeal(day, type, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-xl shadow-sm"
                >
                  <option value="">-- Select {type} --</option>
                  {meals.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlanner;
