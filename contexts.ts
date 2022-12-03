import { createContext } from 'react';

interface IGlobalContext {
  authState: 'locked' | 'unlocked';
  setAuthState: (authState: 'locked' | 'unlocked') => void;
}

export const GlobalContext = createContext<IGlobalContext>({
  // default values
  authState: 'locked',
  setAuthState: () => {},
});
