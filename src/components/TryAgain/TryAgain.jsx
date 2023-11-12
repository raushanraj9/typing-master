import React from "react";
import "./TryAgain.css";

const TryAgain=({words,characters,wpm,startAgain})=>
{
    
    return (
        <>
        <div className="tryagain-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters:</b>{characters}
                </p>
                <p>
                    <b>Words:</b>{words}
                </p>
                <p>
                    <b>Speed:</b>{wpm} wpm
                </p>
            </div>
            <div>
                <button className="end-buttons start-again-btn" onClick={()=>startAgain()}>Re-try</button>
                <button onClick={()=>{window.open("https://github.com/raushanraj9?tab=repositories","width=800,height=600")}} className="end-buttons share-btn">Share</button>
                <button onClick={()=>{ window.open("https://twitter.com/intent/tweet?text=Check%20this%20out%20","width=800,height=600")}} className="end-buttons tweet-btn">Tweet</button>
            </div>
        </div>
        </>
    )
}

export default TryAgain;