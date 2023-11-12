import React from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestContainer/TestContainer";
const ChallengeSection=({
    selectedParagraph,
    testInfo,
    onInputChange,
    startAgain,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted})=>
{
    return (
        <>
        <div className="challengesection-container">
         <h1 data-aos="fade-down" className="challengesection-header">Take a speed test now!</h1>
        </div>
        <TestContainer 
                    testInfo={testInfo}
                    selectedParagraph={selectedParagraph}
                    words={words}
                    characters={characters}
                    wpm={wpm}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    onInputChange={onInputChange}
                    startAgain={startAgain}
        
        />
        </>
    )
}

export default ChallengeSection;