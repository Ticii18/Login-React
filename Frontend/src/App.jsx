import React from 'react';
import { SessionProvider } from './context/SessionProvider';
import { useSession } from './hooks/userSession'; 
import { Login } from './Components/Login';
import { Home } from './Components/Home';

function AppContent() {
  const { user } = useSession(); 

  return (
    <div className="App">
      {user ? <Home /> : <Login />}
    </div>
  );
}

function App() {
  return (
    <SessionProvider>
      <AppContent />
    </SessionProvider>
  );
}

export default App;
