import React from "react";
import "./TypingChallenge.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallengeNew from "../TypingChallengeNew/TypingChallengeNew";

const TypingChallenge=({
    selectedParagraph,
    testInfo,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    onInputChange
})=>
{
    return (
        <>
        <div className="typingchallenge-container">
          {/* Details section */}
          <div className="details-container">
            {/* Words Typed  */}
            <ChallengeDetailsCard cardName="Words" cardValue={words} />
            
            {/* Characters Typed  */}
            <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
           
            {/* Speed  */}
            <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            
          </div>
        <div className="typewriter-container">
            <TypingChallengeNew 
            
            testInfo={testInfo}
            selectedParagraph={selectedParagraph}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            onInputChange={onInputChange}
            />
        </div>
        </div>
        </>
    )
}

export default TypingChallenge;