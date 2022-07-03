import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-zinc-900 flex min-h-screen items-center justify-center text-white">
      <header>
        <p className="pb-2 text-2xl">gm Vite + React + Tailwind CSS!</p>
        <p>
          <button
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full mb-2"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            href="https://reactjs.org"
            className="text-blue-600 visited:text-purple-600"
          >
            Learn React
          </a>
          {" | "}
          <a
            href="https://vitejs.dev/guide/features.html"
            className="text-blue-600 visited:text-purple-600"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
