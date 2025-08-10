// src/pages/CalorieCalculatorPage.jsx
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

const CalorieCalculatorPage = () => {
  const [form, setForm] = useState({
    gender: 'male',
    age: '',
    weight: '',
    height: '',
    activity: 'moderate',
    goal: 'maintain',
  });

  const [result, setResult] = useState(null);

  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const calculateCalories = () => {
    const { gender, weight, height, age, activity, goal } = form;

    if (!weight || !height || !age) {
      setResult(null);
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const factor = activityFactors[activity];

    // Mifflin-St Jeor BMR
    const bmr =
      gender === 'male'
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const maintenance = bmr * factor;
    let recommendation = maintenance;

    if (goal === 'fatloss') recommendation -= 500;
    else if (goal === 'musclegain') recommendation += 300;

    setResult({
      maintenance: Math.round(maintenance),
      recommended: Math.round(recommendation),
    });
  };

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
         Calorie Calculator
      </h1>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Age (years)</label>
            <input type="number" name="age" value={form.age} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-medium">Weight (kg)</label>
            <input type="number" name="weight" value={form.weight} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-medium">Height (cm)</label>
            <input type="number" name="height" value={form.height} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div className="sm:col-span-2">
            <label className="block font-medium">Activity Level</label>
            <select name="activity" value={form.activity} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Light (1–3 days/week)</option>
              <option value="moderate">Moderate (3–5 days/week)</option>
              <option value="active">Active (6–7 days/week)</option>
              <option value="veryActive">Very Active (twice daily)</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block font-medium">Goal</label>
            <select name="goal" value={form.goal} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="maintain">Maintain Weight</option>
              <option value="fatloss">Fat Loss</option>
              <option value="musclegain">Muscle Gain</option>
            </select>
          </div>
        </div>
        <button
          onClick={calculateCalories}
          className="w-full bg-black text-white hover:bg-white hover:text-black py-2 rounded font-semibold hover:bg-green-700"
        >
          Calculate Calories
        </button>

        {result && (
          <div className="mt-4 text-center text-lg font-medium text-gray-800 space-y-2">
            <p> Maintenance Calories: <strong>{result.maintenance} kcal/day</strong></p>
            <p> Recommended for Goal: <strong>{result.recommended} kcal/day</strong></p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default CalorieCalculatorPage;
