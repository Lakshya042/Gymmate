// src/components/Button.jsx
const Button = ({ children, className = '', ...props }) => (
    <button
      className={`bg-white-600 hover: bg-white-700 text-white font-semibold py-2 px-4 rounded-xl transition-all shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  
  export default Button;
  