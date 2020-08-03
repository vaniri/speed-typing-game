import { useState, useEffect, useRef } from 'react';


const useGameContext = (startingTime = 5) => {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)

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
        setTimeRemaining(startingTime);
        setText("");
        textBoxRef.current.disabled = false
        textBoxRef.current.focus();
    }

    const endGame = () => {
        console.log(1);
        setIsTimeRunning(false);
        setWordCount(countWords(text));
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(prevTime => prevTime - 1)
            }, 1000)
        } else if (timeRemaining === 0) {
            endGame();
        }
    }, [ timeRemaining, isTimeRunning ]);

    return { 
        text, 
        timeRemaining, 
        isTimeRunning, 
        wordCount, 
        textBoxRef, 
        handleChange, 
        startGame 
      }

}

export default useGameContext;