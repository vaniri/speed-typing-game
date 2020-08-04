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
            <h2>Time remaning: {timeRemaining}</h2>
            <h2>Word count: {wordCount}</h2>
            <textarea
                ref={textBoxRef}
                value={text}
                onChange={handleChange}
                disabled={!isTimeRunning}
            />
            <button
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
        </div>
    )
}

export default GameBoxComponent; 