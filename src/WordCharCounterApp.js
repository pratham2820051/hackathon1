import React, { useState } from 'react';
import './WordCharCounterApp.css';

const WordCharCounterApp = () => {
  const [text, setText] = useState('');
  const [charLimit, setCharLimit] = useState(50);
  const [fontSize, setFontSize] = useState(16);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);


    const wordCount = newText.trim().split(/\s+/).filter(Boolean).length;

  
    const charCount = newText.length;


    if (charCount > charLimit) {
      setText(newText.slice(0, charLimit));
    }

    // Set font size
    const fontSizeInput = document.getElementById('fontSize-input');
    if (fontSizeInput) {
      setFontSize(fontSizeInput.value);
    }

    // Update the counters
    const wordCounter = document.getElementById('word-counter');
    const charCounter = document.getElementById('char-counter');

    if (wordCounter) {
      wordCounter.textContent = wordCount;
    }

    if (charCounter) {
      charCounter.textContent = charCount;
    }
  };

  const handleCharLimitChange = (e) => {
    setCharLimit(Number(e.target.value));
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  return (

    <div>
    <label htmlFor="fontSize-input">Font Size:</label>
    <input
      type="range"
      id="fontSize-input"
      min="16"
      max="32"
      value={fontSize}
      onChange={handleFontSizeChange}
    />

    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        style={{ fontSize: `${fontSize}px` }}
      ></textarea>
      <div>
        Total Number of Word Count: <span id="word-counter">0</span>
      </div>
      <div>
        Total Number of Character Count: <span id="char-counter">0</span>
      </div>
      <div>
        <label htmlFor="char-limit-input">Word limit input:</label>
        <input
          type="number"
          id="char-limit-input"
          value={charLimit}
          onChange={handleCharLimitChange}
        />
      </div>
     
      </div>
    </div>
  );
};

export default WordCharCounterApp;
