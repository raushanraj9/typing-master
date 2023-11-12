import React from "react";
import "./TypingChallengeNew.css";
import TestLetter from "../TestLetter/TestLetter";

const TypingChallengeNew=({
    testInfo,
    timeRemaining,
    timerStarted,
    selectedParagraph,
    onInputChange
})=>
{
    // console.log("Inside typing challenge",testInfo);
  return (
    <>
    <div className="typingchallengenew-container">
        <div className="timer-container">
            <p className="timer">
                00:{timeRemaining>=10?timeRemaining:`0${timeRemaining}`}
                </p>
            <p className="timer-info">{!timerStarted && "Start typing to start the test"}</p>
        </div>
      
      <div className="textarea-container">
        <div className="textarea-left">
                  <div className="textarea test-paragraph">
                  {/* {selectedParagraph} */}
                  {testInfo.map((individualLetterInfo,index)=>{
                    return (
                        <TestLetter key={index} individualLetterInfo={individualLetterInfo}/>
                    )
                  })}
                  </div>
        </div>
        <div className="textarea-right">
          <textarea className="textarea" placeholder="Start typing here" onChange={(e)=>onInputChange(e.target.value)}></textarea>
        </div>
      </div>
    </div>
    </>
  )
}

export default TypingChallengeNew;