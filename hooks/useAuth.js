import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    FacebookAuthProvider,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider
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

    const signInWithFacebook = async () => {
      setLoading(true);
  
      const provider = new FacebookAuthProvider();
  
      try {
        const userCredential = await signInWithPopup(auth, provider);
        setUser(userCredential.user);
        router.push('/beranda'); 
      } catch (error) {
        setError(error);
        console.error('Error signing in with Facebook:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const signInWithGoogle = async () => {
      setLoading(true);
    
      const provider = new GoogleAuthProvider();
    
      try {
        const userCredential = await signInWithPopup(auth, provider);
        setUser(userCredential.user);
        router.push('/beranda'); 
      } catch (error) {
        setError(error);
        console.error('Error signing in with Google:', error);
      } finally {
        setLoading(false);
      }
    };
    
    const signInWithGitHub = async () => {
      setLoading(true);
    
      const provider = new GithubAuthProvider();
    
      try {
        const userCredential = await signInWithPopup(auth, provider);
        setUser(userCredential.user);
        router.push('/beranda'); 
      } catch (error) {
        setError(error);
        console.error('Error signing in with GitHub:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const signUp = async (email, password) => {
      setLoading(true);
  
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
        router.push('/');
        setLoading(false)
        alert('Pembuatan akun berhasil! Silakan Masuk...');
      } catch (error) {
        setError(error);
        console.error('Error signing up:', error);
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
  

    const signIn = async (email, password) => {
      setLoading(true);
  
      
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setUser(userCredential.user)
      router.push('/beranda')
      setLoading(false)
    })
    .catch((error) => alert(error.message))
    .finally(() => setLoading(false))
    };
  
    const logout = async () => {
      setLoading(true);
  
      signOut(auth)
      .then(() => {
        setLoading(true)
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
        signInWithFacebook,
        signInWithGoogle,
        signInWithGitHub,
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