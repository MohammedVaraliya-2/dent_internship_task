import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import AudioPlayer from './components/AudioPlayer';
import AuthenticatingUser from './components/AuthenticatingUser';
import { useState } from 'react';

function App() {

  const { isAuthenticated } = useAuth0();


  return (
    <div className="App">
      <AuthenticatingUser />
      <h1>My App</h1>
      {isAuthenticated && 
      <AudioPlayer />}
    </div>
  );
}

export default App;
