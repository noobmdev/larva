import React from 'react'
import "./Phase.css"
import a1 from "../../assets/items/a1.png"
import a2 from "../../assets/items/a2.png"
import a3 from "../../assets/items/a3.png"
import tele from "../../assets/items/tele.svg"
import tw from "../../assets/items/tw.svg"
import dc from "../../assets/items/dc.svg"
import rd from "../../assets/items/rd.svg"

function Phase() {
    return (
        <div id="art">
            <h1 id="title-roadmap">ART</h1>
            <div className='row mx-0 img-footer'>
                <div className='col-4'>
                    <img src={a1} width="100%" alt="swap" />
                </div>
                <div className='col-4'>
                    <img src={a2} width="100%" alt="swap" />
                </div>
                <div className='col-4'>
                    <img src={a3} width="100%" alt="swap" />
                </div>
            </div>
            <div className='text-footer'>Our community grows stronger every day. Please follow our social platforms to get the most up-to-date,
                accurate LARVA information</div>

            <div className='row mx-0 d-flex justify-content-center'>
                <div className='col-sm-6 col-12 info'>
                    <div className='col-2'>
                        <a href="https://t.me/Larvainu" target="blank">
                            <img src={tele} width="100%" alt="swap" />
                        </a>
                    </div>
                    <div className='col-2'>
                        <a href='https://twitter.com/Larva_Inu' target="blank">
                            <img src={tw} width="100%" alt="swap" />
                        </a>
                    </div>
                    <div className='col-2'>
                        <a href='#'>
                            <img src={rd} width="100%" alt="swap" />
                        </a>
                    </div>
                    <div className='col-2'>
                        <a href='#'>
                            <img src={dc} width="100%" alt="swap" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phase
