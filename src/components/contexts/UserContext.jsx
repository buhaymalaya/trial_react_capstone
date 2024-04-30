import { createContext, useState } from 'react'

export const UserContext = createContext();

export default function UserProvider({ children }) {

  const [user, setUser] = useState({ accessToken: '' });

  console.log(user, 'from user context');

  const values = {
    user,
    setUser,
  }

  return <UserContext.Provider value={values}>
    { children }
  </UserContext.Provider>
}
