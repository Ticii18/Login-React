import { useContext } from 'react';
import { SessionContext } from '../context/SessionProvider';

export function useSession() {
  const context = useContext(SessionContext);
  
  if (!context) {
    throw new Error("useSession debe usarse dentro de un SessionProvider");
  }

  return context; 
}