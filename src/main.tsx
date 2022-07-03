import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.goerli,
    chain.optimism,
    chain.optimismKovan,
    chain.polygon,
    chain.polygonMumbai,
    chain.arbitrum,
  ],
  [
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/eth",
        };
      },
    }),
    publicProvider(),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/eth_goerli",
        };
      },
    }),
    publicProvider(),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/optimism",
        };
      },
    }),
    publicProvider(),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/optimism_testnet",
        };
      },
    }),
    publicProvider(),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/polygon_mumbai",
        };
      },
    }),
    publicProvider(),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/arbitrum",
        };
      },
    }),
    publicProvider(),
  ]
);

// you can also add a custom wallet list containing any of the following wallets: Argent, Brave Wallet, Coinbase Wallet, Injected Wallet, Ledger Live, MetaMask, Rainbow, Trust Wallet, Steakwallet, imToken, or WalletConnect. Learn more here: https://www.rainbowkit.com/docs/custom-wallet-list
const { connectors } = getDefaultWallets({
  appName: "Vite Tailwind RainbowKit Wagmi Starter",
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} coolMode>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
