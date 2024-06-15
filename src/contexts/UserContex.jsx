import React, { createContext, useState } from 'react';

export const UserContex = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return (
    <UserContex.Provider value={{ user, setUser }}>
      {children}
    </UserContex.Provider>
  );
};
