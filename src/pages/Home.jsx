// src/pages/Home.jsx
import React from "react";
import PageWrapper from "../components/PageWrapper";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center max-w-7xl">
      <h1 className="text-6xl font-bold text-black mb-10 max-w-7xl">
        Welcome to GYMMATE
      </h1>
      <p className="text-4xl text-gray-800 mb-8">
        Your personal offline meal planner and workout genrator — plan and track your meals effortlessly.
      </p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <Link to="/meals">
          <Button className="bg-black hover:bg-blue-700">View Meals</Button>
        </Link>
        <Link to="/planner">
          <Button className="bg-black hover:bg-blue-700">
            Meal Planner
          </Button>
        </Link>

        <Link
          to="/recommendations"
          className="text-green-700 font-medium hover:underline"
        >
          <Button className="bg-black hover:bg-blue-700">
            Recommendation
          </Button>
        </Link>

        <Link to="/WorkoutGenrator">
          <Button className="bg-black hover:bg-blue-700">
            Workout Genrator
          </Button>
        </Link>
        <Link to="/calorie-calculator" className="bg-black hover:bg-blue-700">
          <Button className="bg-black hover:bg-blue-700">
            Calorie Calculator
          </Button>
        </Link>
      </div>

      {/* Additional content starts here */}
      <div className="mt-16 max-w-4xl mx-auto text-left px-4">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Why Fitness Matters</h2>
        <p className="text-lg text-gray-700 mb-6">
          Fitness is not just about looking good—it’s about feeling strong, energized, and confident. Regular exercise helps improve your heart health, boost your metabolism, and enhance your mental clarity. It reduces stress, promotes better sleep, and increases longevity.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Eating well plays a crucial role in achieving your fitness goals. Balanced nutrition fuels your workouts, aids recovery, and supports muscle growth or fat loss depending on your goals. GYMMATE offers personalized meal plans tailored to your dietary preferences to make healthy eating simple and enjoyable.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Our workout generator creates routines that focus on your targeted muscle groups and fit your schedule, ensuring you get the most effective training without guesswork.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Commitment to Your Health</h2>
        <p className="text-lg text-gray-700 mb-6">
          At GYMMATE, we believe fitness is a lifestyle, not a quick fix. Our goal is to empower you with the tools and knowledge you need to build sustainable habits that improve your quality of life. Whether you are a beginner or a seasoned athlete, our app adapts to your needs.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          You can track your calorie intake, log your workouts, and plan meals all offline—making it easy to stay consistent no matter where life takes you.
        </p>
        <p className="text-lg text-gray-700">
          Take control of your health today and join thousands of users transforming their lives one meal and one workout at a time.
        </p>
      </div>
      {/* Additional content ends here */}
    </div>
  );
};

export default Home;
