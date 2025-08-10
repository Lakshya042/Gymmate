// src/pages/MealsPage.jsx
import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import MealForm from '../components/MealForm';
import MealList from '../components/MealList';

const MealsPage = () => {
  const [meals, setMeals] = useState(() => {
    return JSON.parse(localStorage.getItem('meals')) || [];
  });

  useEffect(() => {
    localStorage.setItem('meals', JSON.stringify(meals));
  }, [meals]);

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold text-black mb-8 text-center"> My Meals</h1>
      <MealForm setMeals={setMeals} />
      <MealList meals={meals} setMeals={setMeals} />
    </PageWrapper>
  );
};

export default MealsPage;
