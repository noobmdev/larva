import { InjectedConnector } from "@web3-react/injected-connector";
import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { CHAIN_ID, RPC_NODE } from "../configs";

const chainId = parseInt(CHAIN_ID.toString(), 10);
const rpcNode = RPC_NODE;
if (!rpcNode) throw Error("One RPC node is not configured");

export const injected = new InjectedConnector({
  supportedChainIds: [chainId],
});

export const connectorByNames = {
  injected,
};

export const simpleRpcProvider = new StaticJsonRpcProvider(rpcNode);

export const setupDefaultNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: "Binance Smart Chain",
            nativeCurrency: {
              name: "BNB",
              symbol: "bnb",
              decimals: 18,
            },
            rpcUrls: [rpcNode],
          },
        ],
      });
      return true;
    } catch (error) {
      console.error("Failed to setup the network in Metamask:", error);
      return false;
    }
  } else {
    console.error(
      "Can't setup the BSC network on metamask because window.ethereum is undefined"
    );
    return false;
  }
};
