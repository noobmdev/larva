import { useWeb3React } from "@web3-react/core";
import React, { useCallback, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/items/logo.svg";
import useWallet from "../../hooks/useWallet";
import { injected } from "../../utils/web3React";
import { formatAddress } from "../../utils";

function NavComp() {
  const { account } = useWeb3React();
  const { connect } = useWallet();

  const handleConnect = useCallback(() => {
    connect(injected);
  }, [connect]);

  // useEffect(() => {
  //   handleConnect();
  // }, [handleConnect]);

  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#spin">Spin To Earn</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/13bsdalILmlRvzR-ePl2vWiWZxcmgO39C/view?usp=sharing"
              target="blank"
            >
              Whitepaper
            </Nav.Link>
            {/* <Nav.Link href="#roadmap">Stake</Nav.Link> */}
            <Nav.Link href="#art">Art</Nav.Link>
            <Nav.Link href="https://t.me/Larvainu" target="blank">
              Community
            </Nav.Link>
            <button className="btn btn-primary" onClick={handleConnect}>
              {account ? formatAddress(account) : "Connect Wallet"}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComp;
