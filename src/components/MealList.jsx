// src/components/MealList.jsx
import React from 'react';
import Button from './Button';

const MealList = ({ meals, setMeals }) => {
  const handleDelete = (id) => {
    setMeals((prev) => prev.filter((meal) => meal.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-black mb-4">Your Meals</h2>
      <div className="space-y-4">
        {meals.map((meal) => (
          <div key={meal.id} className="bg-blue-100 p-4 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-lg text-black">{meal.name}</h3>
            <p className="text-xl text-gray-600">
              Ingredients: {meal.ingredients.join(', ')}
            </p>
            {meal.notes && <p className="text-xl text-gray-600 mt-2">Notes: {meal.notes}</p>}
            {meal.tags && (
              <div className="mt-2">
                <span className="font-medium">Tags:</span>
                <div className="flex gap-2 flex-wrap">
                  {meal.tags.map((tag) => (
                    <span key={tag} className="text-l text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-end mt-4">
              <Button
                className="bg-black hover:bg-red-600"
                onClick={() => handleDelete(meal.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealList;
