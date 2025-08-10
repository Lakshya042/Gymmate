import React, { useState } from 'react';

const workoutData = {
  strength: [
    { name: 'Deadlifts', muscleGroup: 'Back & Legs' },
    { name: 'Squats', muscleGroup: 'Legs' },
    { name: 'Bench Press', muscleGroup: 'Chest' },
    { name: 'Overhead Press', muscleGroup: 'Shoulders' },
    { name: 'Barbell Rows', muscleGroup: 'Back' },
    { name: 'Pull-Ups', muscleGroup: 'Back' },
    { name: 'Power Cleans', muscleGroup: 'Full Body' },
    { name: 'Front Squats', muscleGroup: 'Legs' },
    { name: 'Trap Bar Deadlifts', muscleGroup: 'Legs & Back' },
    { name: 'Farmer Carries', muscleGroup: 'Grip & Core' }
  ],
  musclebuilding: [
    { name: 'Dumbbell Flys', muscleGroup: 'Chest' },
    { name: 'Lat Pulldown', muscleGroup: 'Back' },
    { name: 'Tricep Dips', muscleGroup: 'Triceps' },
    { name: 'Bicep Curls', muscleGroup: 'Biceps' },
    { name: 'Incline Bench Press', muscleGroup: 'Upper Chest' },
    { name: 'Cable Crossovers', muscleGroup: 'Chest' },
    { name: 'Hammer Curls', muscleGroup: 'Biceps' },
    { name: 'Leg Extensions', muscleGroup: 'Quads' },
    { name: 'Calf Raises', muscleGroup: 'Calves' }
  ],
  endurance: [
    { name: 'Running', muscleGroup: 'Legs & Cardio' },
    { name: 'Cycling', muscleGroup: 'Legs & Cardio' },
    { name: 'Rowing Machine', muscleGroup: 'Full Body & Cardio' },
    { name: 'Jump Rope', muscleGroup: 'Legs & Cardio' },
    { name: 'Burpees', muscleGroup: 'Full Body' },
    { name: 'High Knees', muscleGroup: 'Legs' },
    { name: 'Mountain Climbers', muscleGroup: 'Core & Legs' },
    { name: 'Swimming', muscleGroup: 'Full Body' },
    { name: 'Box Jumps', muscleGroup: 'Legs' },
    { name: 'Jumping Jacks', muscleGroup: 'Full Body' }
  ],
  flexibility: [
    { name: 'Yoga', muscleGroup: 'Full Body' },
    { name: 'Dynamic Stretching', muscleGroup: 'Full Body' },
    { name: 'Pilates', muscleGroup: 'Core & Flexibility' },
    { name: 'Toe Touches', muscleGroup: 'Hamstrings' },
    { name: 'Shoulder Rolls', muscleGroup: 'Shoulders' },
    { name: 'Hip Circles', muscleGroup: 'Hips' },
    { name: 'Cat-Cow Stretch', muscleGroup: 'Spine & Core' },
    { name: 'Hamstring Stretch', muscleGroup: 'Hamstrings' },
    { name: 'Butterfly Stretch', muscleGroup: 'Groin' },
    { name: 'Child’s Pose', muscleGroup: 'Back & Hips' }
  ]
};

const WorkoutGenerator = () => {
  const [category, setCategory] = useState('strength');
  const [muscleGroup, setMuscleGroup] = useState('');
  const [generatedWorkouts, setGeneratedWorkouts] = useState([]);

  const getUniqueMuscleGroups = () => {
    const groups = workoutData[category].map(w => w.muscleGroup);
    return [...new Set(groups)];
  };

  const generateWorkouts = () => {
    const workouts = workoutData[category].filter(w => !muscleGroup || w.muscleGroup === muscleGroup);
    const shuffled = [...workouts].sort(() => 0.5 - Math.random());
    const workoutsWithDetails = shuffled.slice(0, 5).map(workout => ({
      name: workout.name,
      muscleGroup: workout.muscleGroup,
      sets: Math.floor(Math.random() * 3) + 3,
      reps: Math.floor(Math.random() * 6) + 8
    }));
    setGeneratedWorkouts(workoutsWithDetails);
  };

  return (
    <div className="min-h-screen bg-blue-200 text-black flex items-center justify-center px-6 py-12 border-3 border-blue-500">
      <div className="bg-blue-300 shadow-2xl rounded-3xl p-16 w-full max-w-3xl space-y-10 border-2 border-gray-400 ">
        <h1 className="text-4xl font-extrabold text-black text-center">Workout Generator</h1>

        <div className="space-y-8">
          <div>
            <label htmlFor="category" className="block text-lg font-semibold text-black mb-3">
              Select Workout Category:
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setMuscleGroup('');
              }}
              className="w-full bg-blue-100 text-black rounded-lg p-4 shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
            >
              <option value="strength">Strength</option>
              <option value="musclebuilding">Muscle Building</option>
              <option value="endurance">Endurance</option>
              <option value="flexibility">Flexibility</option>
            </select>
          </div>

          <div>
            <label htmlFor="muscleGroup" className="block text-lg font-semibold text-black mb-3">
              Select Muscle Group (Optional):
            </label>
            <select
              id="muscleGroup"
              value={muscleGroup}
              onChange={(e) => setMuscleGroup(e.target.value)}
              className="w-full bg-blue-100 text-black rounded-lg p-4 shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-100 transition"
            >
              <option value="">All</option>
              {getUniqueMuscleGroups().map((group, index) => (
                <option key={index} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={generateWorkouts}
            className="w-full bg-blue-100 hover:bg-blue-200 text-black font-bold py-4 rounded-lg transition focus:outline-none focus:ring-6 focus:ring-blue-100"
          >
            Generate Workouts
          </button>
        </div>

        {generatedWorkouts.length > 0 && (
          <div className="bg-blue-100 p-8 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-black mb-6 text-center">Your Workouts</h2>
            <ul className="space-y-4">
              {generatedWorkouts.map((workout, index) => (
                <li
                  key={index}
                  className="bg-blue-200 hover:bg-blue-300 transition rounded-lg p-4 cursor-pointer shadow-md text-black"
                  title={`Sets: ${workout.sets}, Reps: ${workout.reps}`}
                >
                  <span className="font-bold text-lg">{workout.name}</span>{' '}
                  <span className="italic text-sm text-black">({workout.muscleGroup})</span> —{' '}
                  <span>{workout.sets} sets × {workout.reps} reps</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutGenerator;
