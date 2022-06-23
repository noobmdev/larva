import React from 'react'
import "./Roadmap.css"
import rm from "../../assets/items/rm.svg"

function Roadmap() {
  return (
    <div id='roadmap'>
      <div>
        <h1 id="title-roadmap">STAKE</h1>
        <div id="title-text" className='mb-4'>Building a strong and united community is LarvaInu's goal.
          Step by step towards success!</div>
        <img src={rm} width="70%" alt="swap" />
      </div>
    </div>
  )
}

export default Roadmap