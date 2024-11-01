// context/SessionProvider.jsx
import React, { createContext } from 'react';
import { useProvideSession } from '../hooks/useProviderSession';

const SessionContext = createContext();

export function SessionProvider({ children }) {
  const session = useProvideSession();
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export { SessionContext };
