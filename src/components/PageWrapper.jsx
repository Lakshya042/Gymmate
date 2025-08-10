// src/components/PageWrapper.jsx
const PageWrapper = ({ children }) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {children}
      </div>
    </div>
  );
  
  export default PageWrapper;
  