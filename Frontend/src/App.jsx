// App.jsx
import React from 'react';
import { SessionProvider} from './context/SessionProvider';
import { useSession } from './hooks/userSession';
import { Login } from './Components/login';
import { Home } from './Components/home';

function AppContent() {
  const { session } = useSession(); 

  return (
    <div className="App">
      {session ? <Home /> : <Login />}
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