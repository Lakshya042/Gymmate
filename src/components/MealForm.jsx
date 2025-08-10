// src/components/MealForm.jsx
import React, { useState } from 'react';
import Button from './Button';

const TAG_OPTIONS = ['Vegetarian', 'Vegan', 'High-Protein', 'Low-Carb', 'Gluten-Free'];

const MealForm = ({ setMeals }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [notes, setNotes] = useState('');
  const [tags, setTags] = useState([]);

  const handleTagChange = (tag) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeal = {
      id: Date.now(),
      name,
      ingredients: ingredients.split(',').map((i) => i.trim()),
      notes,
      tags,
    };
    setMeals((prev) => [...prev, newMeal]);
    setName('');
    setIngredients('');
    setNotes('');
    setTags([]);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-semibold text-center text-black mb-8">Add a New Meal</h2>

      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Meal name"
          className="w-full p-3 border border-black rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <div className="mb-4">
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (comma separated)"
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <div className="mb-4">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes (optional)"
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="mb-4">
        <span className="font-medium">Tags:</span>
        <div className="flex gap-2 flex-wrap mt-1">
          {TAG_OPTIONS.map((tag) => (
            <label key={tag} className="text-sm">
              <input
                type="checkbox"
                value={tag}
                checked={tags.includes(tag)}
                onChange={() => handleTagChange(tag)}
                className="mr-1"
              />
              {tag}
            </label>
          ))}
        </div>
      </div>

      <Button type="submit" className='text-black'>Add Meal</Button>
    </form>
  );
};

export default MealForm;
