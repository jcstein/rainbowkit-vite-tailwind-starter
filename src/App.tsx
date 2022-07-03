import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return (
    <div className="bg-zinc-900 flex justify-center items-center h-screen text-white">
      <div>
        <div className="flex justify-center text-2xl">
          gm ☀️ Vite + React + Tailwind CSS + RainbowKit!
        </div>
        <p className="mb-4 text-2xl"></p>
        <div className="flex justify-center">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

export default App;
