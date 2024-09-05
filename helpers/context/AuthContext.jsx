"use client";

import React, {
  useEffect,
  useState,
  createContext,
} from "react";


export const AuthContext = createContext(
  undefined
);

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/v1/auth/login/auth`);
        if (!response.ok) {
          console.error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setAuth(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if(isAdd)fetchAuth();
    fetchAuth()
  }, [isAdd]);

  return (
    <AuthContext.Provider
      value={{ auth, error, loading ,setAuth, isAdd, setIsAdd}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;