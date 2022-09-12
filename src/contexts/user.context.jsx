import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState, useEffect } from 'react';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from '../utils/firebase/firebase.utils.js';

// actual value I want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

// The actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  signOutUser();

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth();
      }
      setCurrentUser(user);
    });

    return unSubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
