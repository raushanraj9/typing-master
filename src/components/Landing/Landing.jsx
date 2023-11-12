import React from "react";
import flashpic from "./../../assests/flash.png";
import "./Landing.css"
import Typewriter from 'typewriter-effect';
const Landing=()=>{
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">
                    Can you write....
                </h1>
                <div className="typewriter-container">
                <Typewriter
              options={{
               strings: ['Fast?', 'Correct?','Quick?'],
               autoStart: true,
                loop: true,
                  }}
                 />
                </div>
                </div>
                <div className="landing-right">
                      <img data-aos="fade-left" src={flashpic} alt="flashpic"  className="flash-image"/>
                </div>
           
        </div>
    )
}

export default Landing;