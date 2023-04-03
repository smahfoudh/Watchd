import React, { useState } from 'react';
import LoginApp from './LoginRegistration/Login/LoginApp';
import Register from './LoginRegistration/Register/Register';

const LoginOrRegister = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  return (
    <>
      {isRegistered ? (
        <Register onLogin={() => setIsRegistered(false)} />
      ) : (
        <LoginApp onRegister={handleRegister} />
      )}
    </>
  );
};

export default LoginOrRegister;
