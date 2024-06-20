import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  const updateUser = (newName) => {
    setUserName(newName);
  };

  return (
    <UserContext.Provider value={{ userName, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };