import React, { useState } from 'react';
import Login from './Login'; 
import SignUp from './Signup'; 
import OptionsPage from './OptionsPage';
import LoadingScreen from './LoadingScreen';
import Header from './Header';
import GradientWrapper from './GradientWrapper';

const App = () => {
  const [page, setPage] = useState('login'); 
  const [name, setName] = useState(''); 

  
  const handleNameChange = (newName) => {
    setName(newName);
  };

  
  const handleLogin = (userEmail) => {
    setName(userEmail); 
    setPage('options');
  };

  
  const handleSignUp = (userData) => {
    setName(userData.name); 
    setPage('options');
  };

  return (
    
      <div>
        
        <LoadingScreen /> {}
        
        {page === 'login' && (
          <Login setPage={setPage} onLogin={handleLogin} />
        )}

        {page === 'signup' && (
          <SignUp setPage={setPage} onSignUp={handleSignUp} />
        )}

        {page === 'options' && (
          <>
            <OptionsPage />
            {name && <Header name={name} />} {/* Display the Header when the name is available */}
          </>
        )}
      </div>
    
  );
};

export default App;
