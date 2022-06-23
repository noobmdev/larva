import React from 'react'
import "./Swap.css"
import swap from "../../assets/items/token.svg"

function Swap() {
  return (
    <div id='swap'>
        {/* <h1 id="title-roadmap">LARVASWAP</h1> */}
        <img src={swap} width="65%" alt="swap"/>
    </div>
  )
}

export default Swap