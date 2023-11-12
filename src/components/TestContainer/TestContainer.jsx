import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TestContainer=({
    selectedParagraph,
    testInfo,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    onInputChange,
    startAgain
   
})=>{
      
    return (
        <>
        
        <div className="testcontainer-container">

            {timeRemaining>0 ?( <div data-aos="fade-up" className="typingchallenge-container">
                      <TypingChallenge 
                               selectedParagraph={selectedParagraph}
                               testInfo={testInfo}
                               words={words}
                               characters={characters}
                               wpm={wpm}
                               timeRemaining={timeRemaining}
                               timerStarted={timerStarted}
                               onInputChange={onInputChange}
                               
                      
                      />
                 </div>):(  <div className="tryagain-container">
            <TryAgain words={words} characters={characters} wpm={wpm}
                             startAgain={startAgain}
            />
            </div>)}
                 
          
        </div>
        </>
    )
}

export default TestContainer;
