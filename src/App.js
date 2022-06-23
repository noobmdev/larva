import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import useEagerConnect from "./hooks/useEagerConnect";
import useInactiveListener from "./hooks/useInactiveListener";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Roadmap from "./components/roadmap/Roadmap";
import Phase from "./components/phase/Phase";
import Swap from "./components/swap/Swap";
import Spin from "./components/wheel/index";
import "./App.css";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  const { connector, account } = useWeb3React();

  const [activatingConnector, setActivatingConnector] = useState();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid p-0">
        <Banner />
        <About />
        <Spin />
        <Swap />
        {/* <Roadmap /> */}
        <Phase />
      </div>
    </div>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  );
}
