import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState, useCallback } from "react";
import { getSpinCount, spin } from "../../utils/callContract";
import logo from "../../assets/items/logo.svg";
import "./index.css";
import { getSpinningContract } from "../../utils/getContract";
import useWallet from "../../hooks/useWallet";
import { injected } from "../../utils/web3React";

const items = [
  {
    img: "https://icons-for-free.com/download-icon-box+gift+package+present+ribbon+icon-1320167838910087485_512.png",
    alt: "gift",
    text: "Good luck",
  },
  {
    img: logo,
    alt: "larva",
    text: "+2",
  },
  {
    img: logo,
    alt: "larva",
    text: "+1",
  },
  {
    img: "https://cryptologos.cc/logos/binance-usd-busd-logo.png?v=022",
    alt: "busd",
    text: "10",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/6001/6001283.png",
    alt: "bnb",
    text: "0.1",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/6001/6001283.png",
    alt: "bnb",
    text: "0.5",
  },
];

// check selected item, it is result!!!

const Wheel = () => {
  const { account, library } = useWeb3React();
  const { connect } = useWallet();

  const [show, setShow] = useState(false); // <<== show congratulation notification!!! ^_^
  const [result, setResult] = useState(undefined);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spined, setSpined] = useState();

  useEffect(() => {
    (async () => {
      if (!library || !account) return;
      const spinningContract = getSpinningContract(library, account);

      try {
        const spined = await getSpinCount(library, account);
        setSpined(spined);
      } catch (error) {
        alert(error.message);
      }
      if (!isSpinning) {
        return spinningContract.removeAllListeners();
      }
      spinningContract.on("Result", (sender, box, timestamp) => {
        if (sender) {
          if (sender.toLowerCase() === account.toLowerCase()) {
            setIsSpinning(false);
            setShow(true);
            // alert(`!You hit box ${box.toString()}`);
            setResult(items[parseInt(box.toString())]);
            setSelectedItem(parseInt(box.toString()));
          }
        }
      });
    })();
  }, [account, library, show, result, isSpinning]);

  const handleConnect = useCallback(() => {
    connect(injected);
  }, [connect]);

  const handleSpin = useCallback(async () => {
    if (!account || !library) return alert("please connect wallet");
    setIsSpinning(true);
    setResult(undefined);
    try {
      await spin(library, account);
    } catch (error) {
      setIsSpinning(false);
    }
  }, [account, library]);

  const spinning = selectedItem !== null ? "spinning" : "";

  return (
    <div id="spin">
      <h1 id="title-roadmap">SPIN TO EARN</h1>
      {show && result ? (
        <div className="noti">
          <span>
            <h1>Congratulation</h1>

            <img src={result.img} width="60" alt={result.alt} />
            <div
              style={{
                fontSize: "2rem",
                paddingRight: "8px",
              }}
            >
              {result.text}
            </div>
          </span>

          <div
            onClick={() => {
              setShow(false);
            }}
          >
            <img
              src="https://icon-library.com/images/x-icon-png/x-icon-png-27.jpg"
              className="btn-x"
              width="30"
              alt="x"
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      <div></div>
      <div className="wheel-container">
        <div
          className={`wheel ${isSpinning ? "spinning" : ""}`}
          style={{
            "--nb-item": items.length,
            "--selected-item": selectedItem,
          }}
        >
          {items.map((item, index) => (
            <div
              className="wheel-item"
              key={index}
              style={{ "--item-nb": index }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: index == 0 ? "0.75rem" : "1rem",
                    paddingRight: "8px",
                  }}
                >
                  {item.text}
                </div>
                <img src={item.img} width="40" alt={item.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="result-text">
        Number of spins: {spined?.toString() ?? 0}
      </div>
      {account ? (
        <button className="btn btn-primary" onClick={handleSpin}>
          Spin
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handleConnect}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Wheel;
