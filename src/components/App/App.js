import React, { useState, useEffect } from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Navbar/Nav';
import './App.css';

const TotalTime = 60;
const DefaultState = {
  selectedParagraph: 'Hello World!',
  testInfo: [],
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
};

const App = () => {
  const [state, setState] = useState(DefaultState);

  const fetchNewParagraph = () => {
    fetch('http://metaphorpsum.com/paragraphs/1/9')
      .then((response) => response.text())
      .then((data) => {
        const selectedParagraphArray = data.split('');
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: 'notAttempted',
          };
        });

        setState({
          ...DefaultState,
          selectedParagraph: data,
          testInfo,
          timerStarted: false,
        });
      });
  };

  const startAgain = () => fetchNewParagraph();

  const startTimer = () => {
    // Set timerStarted to true when the timer starts
    setState((prevState) => ({
      ...prevState,
      timerStarted: true,
    }));
  
    let timer;
    const timerStep = 1000; // 1 second
  
    const updateTimer = () => {
      setState((prevState) => {
        if (prevState.timeRemaining > 0) {
          const timeRemaining = prevState.timeRemaining - 1;
          const timeSpent = TotalTime - timeRemaining;
          const wpm = timeSpent > 0 ? (prevState.words / timeSpent) * TotalTime : 0;
          return {
            ...prevState,
            timeRemaining,
            wpm: parseInt(wpm),
          };
        } else {
          clearInterval(timer); // Stop the timer when timeRemaining reaches 0
          return prevState;
        }
      });
    };
  
    timer = setInterval(updateTimer, timerStep);
  };
  
  

  // const startTimer = () => {
  //   setState((prevState) => ({ ...prevState, timerStarted: true }));
  //   const timer = setInterval(() => {
  //     if (state.timeRemaining > 0) {
  //       console.log(state.timeRemaining);
  //       const timeSpent = TotalTime - state.timeRemaining;
        
  //       const wpm = timeSpent > 0 ? (state.words / timeSpent) * TotalTime : 0;
  //       // console.log(wpm);
  //       setState((prevState) => ({
  //         ...prevState,
  //         timeRemaining: prevState.timeRemaining - 1,
  //         wpm: parseInt(wpm),
  //       }));
        
        
  //     } else {
  //       clearInterval(timer);
  //     }
  //   }, 1000);
  // };

  const handleUserInput = (inputValue) => {
    if (!state.timerStarted)
    { 
      startTimer();
    }

    const characters = inputValue.length;
    const words = inputValue.split(' ').length;
    const index = characters - 1;

    if (index < 0) {
      setState((prevState) => ({
        ...prevState,
        testInfo: [
          {
            testLetter: prevState.testInfo[0].testLetter,
            status: 'notAttempted',
          },
          ...prevState.testInfo.slice(1),
        ],
        characters,
        words,
      }));
      return;
    }

    if (index >= state.selectedParagraph.length) {
      setState((prevState) => ({
        ...prevState,
        characters,
        words,
      }));
      return;
    }

    const testInfo = [...state.testInfo];
    if (!(index === state.selectedParagraph.length - 1))
      testInfo[index + 1].status = 'notAttempted';

    const isMistake = inputValue[index] === testInfo[index].testLetter;

    testInfo[index].status = isMistake ? 'correct' : 'incorrect';

    setState((prevState) => ({
      ...prevState,
      testInfo,
      words,
      characters,
    }));
  };

  useEffect(() => {
    fetchNewParagraph();
  }, []);

  return (
    <div className="app">
      <Nav />
      <Landing />
      <ChallengeSection
        selectedParagraph={state.selectedParagraph}
        testInfo={state.testInfo}
        onInputChange={handleUserInput}
        words={state.words}
        characters={state.characters}
        wpm={state.wpm}
        timeRemaining={state.timeRemaining}
        timerStarted={state.timerStarted}
        startAgain={startAgain}
      />
      <Footer />
    </div>
  );
};

export default App;
