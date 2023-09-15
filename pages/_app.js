

import { AuthProvider } from "@/hooks/useAuth";
import "@/styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
 
      <AuthProvider>
        <Component {...pageProps} />
        </AuthProvider>
  

  );
}
