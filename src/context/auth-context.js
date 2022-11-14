import { useContext } from 'react';
import { createContext, useEffect, useState } from 'react';
import { tokenKey, userKey } from '../config';
import * as auth from './../services/auth-service';
import { createUser, getUser, updateUser } from './../services/users-service';

const AuthContext = createContext();
const initialToken = sessionStorage.getItem(tokenKey);
const initialUser = sessionStorage.getItem(userKey);

function AuthProvider({ children }) {
  const [ token ] = useState(initialToken);
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    if (token) {
      getUser()
        .then((u) => setUser(u))
        .catch((error) => console.log(error));
    }
  }, [token]);

  function login(credentials) {
    auth
      .login(credentials)
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }
  function logout() {
    auth.logout().then(() => {
      sessionStorage.removeItem(tokenKey);
      sessionStorage.removeItem(userKey);
      setUser(null);
    });
  }
  function handleUpdate(userData) {
    updateUser(userData)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => console.log(error));
  }
  function signup(userData) {
    console.log(userData)
    createUser(userData)
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        handleUpdate
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
