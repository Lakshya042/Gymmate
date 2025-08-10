import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Planner from './pages/Planner';

import About from './pages/About';
import WorkoutGenerator from './pages/WorkoutGenerator';
import MealRecommendationsPage from './pages/MealRecommendationsPage'
import CalorieCalculatorPage from './pages/CalorieCalculator';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6 max-w-5xl mx-auto">
        <Routes>
          <Route path="/gymmate" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/planner" element={<Planner />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/workoutgenrator" element={<WorkoutGenerator />} />
          <Route path="/recommendations" element={<MealRecommendationsPage />} />
          <Route path='/calorie-calculator' element={<CalorieCalculatorPage />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;