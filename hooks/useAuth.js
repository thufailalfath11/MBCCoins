import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth';
  import { createContext, useContext, useEffect, useMemo, useState } from 'react';
  import { auth } from '../firebase';
import { useRouter } from 'next/router';
  
  const AuthContext = createContext({
    user: null,
    signUp: async () => {},
    signIn: async () => {},
    logout: async () => {},
    error: null,
    loading: false,
  });
  
  export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);
    const router = useRouter()
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in...
          setUser(user);

          setLoading(false);
        } else {
          // Not logged in...
          setUser(null);
          setLoading(true);
          router.push('/')
        }
        setInitialLoading(false);
      });
  
      return () => unsubscribe();
    }, []);
  
    const signUp = async (email, password) => {
      setLoading(true);
  
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        router.push('/')
        setLoading(false)
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false))
    };
  
    const signIn = async (email, password) => {
      setLoading(true);
  
      
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setUser(userCredential.user)
      router.push('/')
      setLoading(false)
    })
    .catch((error) => alert(error.message))
    .finally(() => setLoading(false))
    };
  
    const logout = async () => {
      setLoading(true);
  
      ignOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false))
    };
  
    const memoedValue = useMemo(
      () => ({
        user,
        signUp,
        signIn,
        loading,
        logout,
        error,
      }),
      [user, loading]
    );
  
    return (
      <AuthContext.Provider value={memoedValue}>
        {!initialLoading && children}
      </AuthContext.Provider>
    );
  };
  
  export default function useAuth() {
    return useContext(AuthContext);
  }