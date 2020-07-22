import React, { useState, useEffect } from 'react';
import './App.css';

const GameBoxComponent = () => {

    const [text, setText] = useState("");
    const [remaningTime, setRemaningTime] = useState(5);
    const [isTimeRuning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);


    const handleChange = event => {
        const { value } = event.target;
        setText(value);
    }

    const countWords = (text) => {
        const wordsArr = text.trim().split(" ");
        return wordsArr.filter(word => word !== "").length;
    }

    const startGame = () => {
        setIsTimeRunning(true);
        setRemaningTime(5);
        setText("");
    }

    const endGame = () => {
        console.log(1);
        setIsTimeRunning(false);
        setWordCount(countWords(text));
    }

    useEffect(() => {
        if (isTimeRuning && remaningTime > 0) {
            setTimeout(() => {
                setRemaningTime(prevTime => prevTime - 1)
            }, 1000)
        } else if (remaningTime === 0) {
            endGame();
        }
    }, [ remaningTime, isTimeRuning ]);

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                value={text}
                onChange={handleChange}
                disabled={!isTimeRuning}
            />
            <h4>Time remaning: {remaningTime}</h4>
            <button
                onClick={startGame}
                disabled={isTimeRuning}
            >
                Start!
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default GameBoxComponent; 