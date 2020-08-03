import React from 'react';
import './App.css';
import useGameContext from './useGameContext';

const GameBoxComponent = () => {
    const {
        text, 
        timeRemaining, 
        isTimeRunning, 
        wordCount, 
        textBoxRef, 
        handleChange, 
        startGame 
    } = useGameContext(5);

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                value={text}
                onChange={handleChange}
                disabled={!isTimeRunning}
            />
            <h4>Time remaning: {timeRemaining}</h4>
            <button
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start!
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default GameBoxComponent; 