import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BsGithub, BsTwitter } from "react-icons/bs";

function App() {
  return (
    <div className="bg-zinc-900 flex justify-center items-center h-screen text-white w-screen">
      <div>
        <div className="flex justify-center text-sm sm:text-base md:text-3xl lg:text-4xl pb-10">
          gm 🌈 RainbowKit + Vite + React + Tailwind CSS!
        </div>
        <div className="flex justify-center">
          <ConnectButton />
        </div>
        <div className="flex justify-center pt-10">
          <a
            href="https://github.com/jcstein/vite-tailwind-rainbowkit-starter"
            rel="noopener nofollow noreferrer"
            target="_blank"
          >
            <button className="flex items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <BsGithub />
            </button>
          </a>
          <a
            href="https://twitter.com/JoshCStein"
            rel="noopener nofollow noreferrer"
            target="_blank"
          >
            <button className="flex items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <BsTwitter />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
