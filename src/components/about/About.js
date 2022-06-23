import React from 'react'
import "./About.css"
import { Card, Tabs, Tab } from "react-bootstrap"
import a1 from "../../assets/items/n2.png"


function About() {
    return (
        <div id='about' className='py-5'>
            <div className='row mx-0'>
                <div className='col-sm-6 col-12 px-3'>
                    <div className='tab-text p-3'>
                        <h1>About Us</h1>
                        Larva token plays a fundamental role as it will not only represent a
                        tradable currency but also can be used to play mini games it will
                        bring fun and money to player and profits to the holder of that
                        notice.
                        $Larva is a deflationary token designed to become more scarce over
                        time. Everyone who owns Larva earns more Larva and is automatically deposited into your wallet by simply holding Larva coins in your
                        wallet. See how Larva grows in your wallet as Larva holders automatically receive a 2% fee from every on-chain transaction that occurs
                        on the Larva ecosystem. The community gets more Larva coins from
                        the fees incurred for each transaction. In addition, we will burn the
                        token to create a scarcity and its value cannot be reduced.
                    </div>
                    <a href='#' className='btn btn-outline-light mx-2'>HOW TO BUY</a>
                    <a href='https://drive.google.com/file/d/13bsdalILmlRvzR-ePl2vWiWZxcmgO39C/view?usp=sharing' target="blank" className='btn btn-outline-light mx-2'>Read LarvaPaper</a> 
                </div>
                <div className='col-sm-6 col-12 img-wrap'>
                    <img src={a1} width="50%" alt="a1" />
                </div>
            </div>
        </div>
    )
}

export default About
