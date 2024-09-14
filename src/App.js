// src/App.js
import React, { useState } from 'react';
import UserInput from './UserInput';
import OptionsPage from './OptionsPage';
import LoadingScreen from './LoadingScreen'; 

const App = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div>
      {}
      <LoadingScreen />
      
      {!showOptions ? <UserInput setShowOptions={setShowOptions} /> : <OptionsPage />}
    </div>
  );
};

export default App;
