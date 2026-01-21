function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-red-600">
          Tailwind is Working 🎉
        </h1>
        <p className="mt-4 text-gray-600">
          If you see colors, spacing, and styling, Tailwind CSS is set up correctly.
        </p>
        <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;
