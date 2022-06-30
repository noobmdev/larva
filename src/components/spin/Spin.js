import { useWeb3React } from "@web3-react/core";
import React from "react";
import Wheel from "../wheel";
import Navbar from "../navbar/Navbar";

import "./Spin.css";

function Spin() {
	return (
		<div className="App">
			<Navbar />
			<div className="container-fluid p-0" style={{ minHeight: "100vh" }}>
				<Wheel />
			</div>
		</div>
	);
}

export default Spin;
