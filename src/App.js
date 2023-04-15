import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 101));
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('All the best! Start the game by clicking button');

  const generate = () => {
    const newrandomNumber = Math.floor(Math.random() * 101);
    console.log(newrandomNumber);
    setRandomNumber(newrandomNumber);
  };
  useEffect(()=>{
    console.log(randomNumber);
  },[randomNumber])

  const check = () => {
    const diff = Math.abs(randomNumber - guess);
    setAttempts(prevAttempts => prevAttempts + 1); // use functional update
    if (diff === 0) {
      if (attempts < 5) {
        setMessage(`Great! You guessed quite fast. You guessed it in ${attempts + 1} attempts.`); // update message to use updated attempts value
        generate();
        setAttempts(0);
      } else if (attempts < 10) {
        setMessage(`Good! You guessed not too fast. You guessed it in ${attempts + 1} attempts.`); // update message to use updated attempts value
        generate();
        setAttempts(0);
      } else {
        setMessage(`God! You guessed at last. You guessed it in ${attempts + 1} attempts.`); // update message to use updated attempts value
        generate();
        setAttempts(0);
      }
    } else if (diff <= 5) {
      setMessage('You are around five.');
    } else if (diff <= 15) {
      setMessage('You are around fifteen.');
    } else {
      setMessage('You are quite away.');
    }
  };
  
  return (
    <div className='app'>
      <div className='head'>
        <h1>Guess The Number!!!</h1>
      </div>
      <div className='body'>
        <input
          type='number'
          placeholder='Enter your guess number'
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              check();
            }
          }}
        />
        <button onClick={generate}>Generate Random Number</button>
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export default App;
