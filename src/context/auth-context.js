import { useContext } from 'react';
import { createContext, useEffect, useState } from 'react';
import { tokenKey } from '../config';
import * as auth from './../services/auth-service';
import { createUser, getUser, updateUser } from './../services/users-service';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      getUser()
        .then((u) => setUser(u))
        .catch((error) => console.log(error));
    }
  }, []);

  function login(credentials) {
    auth
      .login(credentials)
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }
  function logout() {
    auth.logout().then(() => {
      sessionStorage.removeItem(tokenKey);
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
