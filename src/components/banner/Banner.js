import React from "react";
import "./Banner.css";
import tele from "../../assets/items/tele.svg";
import tw from "../../assets/items/tw.svg";
import left from "../../assets/items/n1.png";
import vd from "../../assets/items/video.mp4";

function Banner() {
  const address = "0xb9e6bc08db15c7164b56e7c6642210c8d1a5c302";

  const copyAdd = () => {
    const text = address;
    if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      window.clipboardData.setData("Text", text);
    } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported("copy")
    ) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy"); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        prompt("Copy to clipboard: Ctrl+C, Enter", text);
      } finally {
        document.body.removeChild(textarea);
      }
    }
    alert("Address was copied!!");
  };

  return (
    <div className="" id="home">
      <div className="row mx-0 d-flex justify-content-center">
        <div className="col-sm-6 col-12 text-banner">
          <h1 className="text-larva">THE NEW TREND 2022</h1>
          <p>
            Larvainu is a worm-themed meme coin that calls itself not a meme
            coin but “a new trend”. This is a cryptocurrency born of a new trend
            "spin to earn".
          </p>
          <a className="btn-buy" href="https://pancakeswap.finance/swap">
            Buy On Pancake Swap
          </a>
          <input className="form-control mt-5 inp" value={address} readOnly />
          <button
            className="btn-cop"
            onClick={() => {
              copyAdd();
            }}
          >
            Copy Address
          </button>
        </div>
      </div>

      <div className="row mx-0 mt-3">
        <div className="col-sm-4 col-12 d-flex align-items-center justify-content-center">
          <img src={left} width="80%" alt="banner-img" />
        </div>
        <div className="col-sm-4 col-12 d-flex follow">
          <div className="title-banner">FOLLOW US</div>
          <div>
            <a href="https://t.me/Larvainu" target="blank">
              <img src={tele} alt="tele" width="70" />
            </a>
            <a href="https://twitter.com/Larva_Inu" target="blank">
              <img src={tw} alt="tele" width="70" />
            </a>
          </div>
        </div>
        <div className="col-sm-4 col-12 p-3 d-flex align-items-center justify-content-center">
          <video
            loop
            autoPlay
            width="100%"
            muted
            controls
            style={{ borderRadius: "5px" }}
          >
            <source src={vd} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Banner;
