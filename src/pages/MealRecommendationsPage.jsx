import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';

// Utility: shuffle array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// 50 Meals (25 Fat Loss + 25 Muscle Gain)
const sampleMeals = [
  // FAT LOSS
  { id: 1, name: 'Grilled Chicken Salad', goal: 'Fat Loss', ingredients: ['Chicken', 'Lettuce', 'Tomatoes', 'Cucumber'], macros: { calories: 350, protein: 30, fat: 15, carbs: 20 } },
  { id: 2, name: 'Tofu Stir Fry', goal: 'Fat Loss', ingredients: ['Tofu', 'Broccoli', 'Carrots', 'Garlic'], macros: { calories: 300, protein: 22, fat: 10, carbs: 25 } },
  { id: 3, name: 'Quinoa Bowl', goal: 'Fat Loss', ingredients: ['Quinoa', 'Avocado', 'Black beans'], macros: { calories: 400, protein: 20, fat: 12, carbs: 45 } },
  { id: 4, name: 'Lentil Soup', goal: 'Fat Loss', ingredients: ['Lentils', 'Carrots', 'Onion'], macros: { calories: 280, protein: 18, fat: 5, carbs: 35 } },
  { id: 5, name: 'Zucchini Noodles', goal: 'Fat Loss', ingredients: ['Zucchini', 'Tomato sauce'], macros: { calories: 250, protein: 12, fat: 8, carbs: 20 } },
  { id: 6, name: 'Chickpea Salad', goal: 'Fat Loss', ingredients: ['Chickpeas', 'Tomatoes', 'Lemon'], macros: { calories: 320, protein: 15, fat: 10, carbs: 35 } },
  { id: 7, name: 'Egg White Omelette', goal: 'Fat Loss', ingredients: ['Egg whites', 'Spinach'], macros: { calories: 200, protein: 20, fat: 5, carbs: 10 } },
  { id: 8, name: 'Steamed Veggies & Hummus', goal: 'Fat Loss', ingredients: ['Carrots', 'Cauliflower', 'Hummus'], macros: { calories: 230, protein: 10, fat: 9, carbs: 20 } },
  { id: 9, name: 'Cucumber Avocado Roll', goal: 'Fat Loss', ingredients: ['Cucumber', 'Avocado', 'Seaweed'], macros: { calories: 180, protein: 6, fat: 14, carbs: 8 } },
  { id: 10, name: 'Berry Protein Smoothie', goal: 'Fat Loss', ingredients: ['Berries', 'Whey protein', 'Almond milk'], macros: { calories: 220, protein: 25, fat: 5, carbs: 15 } },
  { id: 11, name: 'Spinach Soup', goal: 'Fat Loss', ingredients: ['Spinach', 'Garlic', 'Onions'], macros: { calories: 160, protein: 12, fat: 4, carbs: 10 } },
  { id: 12, name: 'Grilled Shrimp Skewers', goal: 'Fat Loss', ingredients: ['Shrimp', 'Bell peppers'], macros: { calories: 270, protein: 26, fat: 8, carbs: 12 } },
  { id: 13, name: 'Cabbage Stir Fry', goal: 'Fat Loss', ingredients: ['Cabbage', 'Chilies', 'Soy sauce'], macros: { calories: 210, protein: 10, fat: 5, carbs: 20 } },
  { id: 14, name: 'Tomato Cucumber Salad', goal: 'Fat Loss', ingredients: ['Tomatoes', 'Cucumber', 'Mint'], macros: { calories: 160, protein: 6, fat: 4, carbs: 14 } },
  { id: 15, name: 'Roasted Veggies', goal: 'Fat Loss', ingredients: ['Zucchini', 'Peppers', 'Olive oil'], macros: { calories: 290, protein: 8, fat: 14, carbs: 28 } },
  { id: 16, name: 'Egg & Veggie Wrap', goal: 'Fat Loss', ingredients: ['Egg', 'Whole wheat wrap'], macros: { calories: 320, protein: 18, fat: 12, carbs: 25 } },
  { id: 17, name: 'Boiled Egg & Apple', goal: 'Fat Loss', ingredients: ['Boiled egg', 'Apple'], macros: { calories: 220, protein: 12, fat: 10, carbs: 15 } },
  { id: 18, name: 'Green Detox Smoothie', goal: 'Fat Loss', ingredients: ['Spinach', 'Cucumber', 'Lime'], macros: { calories: 180, protein: 6, fat: 2, carbs: 20 } },
  { id: 19, name: 'Avocado Toast (Light)', goal: 'Fat Loss', ingredients: ['Avocado', 'Whole grain bread'], macros: { calories: 260, protein: 8, fat: 14, carbs: 20 } },
  { id: 20, name: 'Low-Cal Chicken Soup', goal: 'Fat Loss', ingredients: ['Chicken broth', 'Veggies'], macros: { calories: 280, protein: 20, fat: 8, carbs: 18 } },
  { id: 21, name: 'Broccoli Stir Fry', goal: 'Fat Loss', ingredients: ['Broccoli', 'Garlic'], macros: { calories: 210, protein: 10, fat: 6, carbs: 20 } },
  { id: 22, name: 'Vegan Lettuce Wraps', goal: 'Fat Loss', ingredients: ['Tofu', 'Lettuce', 'Soy sauce'], macros: { calories: 240, protein: 14, fat: 9, carbs: 18 } },
  { id: 23, name: 'Cauliflower Rice Bowl', goal: 'Fat Loss', ingredients: ['Cauliflower', 'Lime'], macros: { calories: 230, protein: 10, fat: 6, carbs: 22 } },
  { id: 24, name: 'Cottage Cheese & Papaya', goal: 'Fat Loss', ingredients: ['Paneer', 'Papaya'], macros: { calories: 260, protein: 18, fat: 8, carbs: 16 } },
  { id: 25, name: 'Clear Veg Soup', goal: 'Fat Loss', ingredients: ['Mixed veggies'], macros: { calories: 170, protein: 6, fat: 4, carbs: 18 } },

  // MUSCLE GAIN
  { id: 26, name: 'Oats & Protein Shake', goal: 'Muscle Gain', ingredients: ['Oats', 'Milk', 'Whey'], macros: { calories: 600, protein: 35, fat: 20, carbs: 60 } },
  { id: 27, name: 'Chicken & Rice Bowl', goal: 'Muscle Gain', ingredients: ['Chicken', 'Brown rice'], macros: { calories: 650, protein: 40, fat: 18, carbs: 55 } },
  { id: 28, name: 'Beef Stir Fry', goal: 'Muscle Gain', ingredients: ['Beef', 'Peppers', 'Soy sauce'], macros: { calories: 700, protein: 45, fat: 25, carbs: 50 } },
  { id: 29, name: 'Paneer Roti Combo', goal: 'Muscle Gain', ingredients: ['Paneer', 'Whole wheat roti'], macros: { calories: 580, protein: 30, fat: 20, carbs: 45 } },
  { id: 30, name: 'Peanut Butter Banana Toast', goal: 'Muscle Gain', ingredients: ['Bread', 'PB', 'Banana'], macros: { calories: 500, protein: 20, fat: 22, carbs: 55 } },
  { id: 31, name: 'Egg & Potato Hash', goal: 'Muscle Gain', ingredients: ['Eggs', 'Potatoes'], macros: { calories: 560, protein: 28, fat: 20, carbs: 48 } },
  { id: 32, name: 'Tofu Brown Rice Bowl', goal: 'Muscle Gain', ingredients: ['Tofu', 'Brown rice'], macros: { calories: 580, protein: 26, fat: 18, carbs: 50 } },
  { id: 33, name: 'Protein Smoothie', goal: 'Muscle Gain', ingredients: ['Banana', 'Milk', 'Peanut butter'], macros: { calories: 640, protein: 35, fat: 22, carbs: 50 } },
  { id: 34, name: 'Cottage Cheese Toast', goal: 'Muscle Gain', ingredients: ['Paneer', 'Bread'], macros: { calories: 490, protein: 25, fat: 18, carbs: 40 } },
  { id: 35, name: 'Whey Pancakes', goal: 'Muscle Gain', ingredients: ['Oats', 'Eggs', 'Whey'], macros: { calories: 620, protein: 32, fat: 22, carbs: 52 } },
  { id: 36, name: 'Tuna Sandwich', goal: 'Muscle Gain', ingredients: ['Tuna', 'Whole wheat bread'], macros: { calories: 530, protein: 30, fat: 18, carbs: 45 } },
  { id: 37, name: 'Egg Roti Combo', goal: 'Muscle Gain', ingredients: ['Eggs', 'Roti'], macros: { calories: 500, protein: 25, fat: 20, carbs: 40 } },
  { id: 38, name: 'Veggie Pasta', goal: 'Muscle Gain', ingredients: ['Whole wheat pasta', 'Cheese'], macros: { calories: 610, protein: 24, fat: 22, carbs: 60 } },
  { id: 39, name: 'Chickpea Curry & Rice', goal: 'Muscle Gain', ingredients: ['Chickpeas', 'Rice'], macros: { calories: 590, protein: 22, fat: 18, carbs: 55 } },
  { id: 40, name: 'Mass Gainer Shake', goal: 'Muscle Gain', ingredients: ['Milk', 'PB', 'Oats'], macros: { calories: 700, protein: 38, fat: 25, carbs: 70 } },
  { id: 41, name: 'Egg Curry & Rice', goal: 'Muscle Gain', ingredients: ['Eggs', 'Rice'], macros: { calories: 580, protein: 28, fat: 18, carbs: 50 } },
  { id: 42, name: 'Stuffed Paratha with Yogurt', goal: 'Muscle Gain', ingredients: ['Wheat flour', 'Paneer'], macros: { calories: 600, protein: 30, fat: 22, carbs: 50 } },
  { id: 43, name: 'Idli & Sambar', goal: 'Muscle Gain', ingredients: ['Rice batter', 'Lentils'], macros: { calories: 520, protein: 22, fat: 14, carbs: 60 } },
  { id: 44, name: 'Dosa with Potato Filling', goal: 'Muscle Gain', ingredients: ['Rice', 'Potato'], macros: { calories: 580, protein: 18, fat: 20, carbs: 65 } },
  { id: 45, name: 'Chana & Brown Rice', goal: 'Muscle Gain', ingredients: ['Chickpeas', 'Brown rice'], macros: { calories: 600, protein: 26, fat: 20, carbs: 55 } },
  { id: 46, name: 'Avocado Chicken Wrap', goal: 'Muscle Gain', ingredients: ['Chicken', 'Avocado', 'Tortilla'], macros: { calories: 630, protein: 36, fat: 24, carbs: 48 } },
  { id: 47, name: 'Fish Tacos', goal: 'Muscle Gain', ingredients: ['Fish', 'Tortilla'], macros: { calories: 590, protein: 32, fat: 22, carbs: 45 } },
  { id: 48, name: 'Egg Fried Rice', goal: 'Muscle Gain', ingredients: ['Eggs', 'Rice', 'Soy Sauce'], macros: { calories: 570, protein: 28, fat: 20, carbs: 50 } },
  { id: 49, name: 'Dal & Jeera Rice', goal: 'Muscle Gain', ingredients: ['Lentils', 'Jeera rice'], macros: { calories: 550, protein: 20, fat: 18, carbs: 55 } },
  { id: 50, name: 'Coconut Curry with Rice', goal: 'Muscle Gain', ingredients: ['Coconut milk', 'Rice'], macros: { calories: 620, protein: 18, fat: 28, carbs: 60 } },
];

const MealRecommendationsPage = () => {
  const [selectedGoal, setSelectedGoal] = useState('All');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const filtered =
      selectedGoal === 'All'
        ? sampleMeals
        : sampleMeals.filter((meal) => meal.goal === selectedGoal);

    setMeals(shuffleArray(filtered));
  }, [selectedGoal]);

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold text-black mb-6 text-center"> Meal Recommendations</h1>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {['All', 'Fat Loss', 'Muscle Gain'].map((goal) => (
          <button
            key={goal}
            onClick={() => setSelectedGoal(goal)}
            className={`px-4 py-2 rounded-xl font-semibold shadow transition-all ${
              selectedGoal === goal
                ? 'bg-blue-300 text-black'
                : 'bg-gray-200 hover:bg-blue-300'
            }`}
          >
            {goal}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {meals.map((meal) => (
          <div key={meal.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-black mb-2">{meal.name}</h2>
            <p className="mb-2">
              <span className="font-medium">Goal:</span> {meal.goal}
            </p>
            <p className="mb-2">
              <span className="font-medium">Ingredients:</span> {meal.ingredients.join(', ')}
            </p>
            <div className="mt-2 text-sm text-gray-700 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div><span className="font-medium">Calories:</span> {meal.macros.calories}</div>
              <div><span className="font-medium">Protein:</span> {meal.macros.protein}g</div>
              <div><span className="font-medium">Fat:</span> {meal.macros.fat}g</div>
              <div><span className="font-medium">Carbs:</span> {meal.macros.carbs}g</div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default MealRecommendationsPage;
