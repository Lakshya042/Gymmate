import { Link, useLocation } from 'react-router-dom';

const pages = ['Gymmate', 'Meals', 'Planner', 'About', 'WorkoutGenrator'];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="
        bg-blue-300/30
        backdrop-blur-md
        shadow-md
        py-4 px-6
        flex justify-center items-center gap-8
        sticky top-0 z-50
        border-4 border-blue-200/50
      "
    >
      {pages.map((page) => {
        const path = `/${page.toLowerCase().replace(' ', '-')}`;
        const isActive = location.pathname === path;

        return (
          <Link
            key={page}
            to={path}
            aria-current={isActive ? 'page' : undefined}
            className={`
              text-black text-lg tracking-wide
              px-4 py-2
              transition-all duration-200
              hover:text-black hover:text-xl
              hover:bg-slate-100
              hover:border-2 hover:border-white
              hover:rounded-md
              ${isActive ? 'font-bold underline' : 'font-normal'}
              focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-400 rounded-md
              flex items-center
            `}
          >
            {page}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
