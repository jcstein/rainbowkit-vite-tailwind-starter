import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-zinc-900 flex justify-center items-center h-screen text-white">
      <div>
        <div className="flex justify-center text-2xl">
          gm Vite + React + Tailwind CSS + RainbowKit!
        </div>
        <p className="mb-4 text-2xl"></p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full mb-4"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
