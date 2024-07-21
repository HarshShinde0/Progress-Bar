import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './App.css';

const App = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 10;
      return newProgress > 100 ? 0 : newProgress;
    });
  };

  return (
    <div className="App">
      <ProgressBar progress={progress} />
      <button onClick={updateProgress}>Increase Progress</button>
    </div>
  );
};

export default App;
