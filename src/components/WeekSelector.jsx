import React from 'react';

const WeekSelector = ({ currentWeek, setCurrentWeek }) => {
  const handleChange = e => setCurrentWeek(e.target.value);
  return (
    <div className="mb-4 flex items-center gap-2">
      <label>Select week (YYYY-MM-DD Monday):</label>
      <input type="date" value={currentWeek} onChange={handleChange} className="p-2 border rounded" />
    </div>
  );
};

export default WeekSelector;