import Layout from "@/components/common/Layout";
import { AuthProvider } from "@/hooks/useAuth";
import "@/styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </AuthProvider>
  );
}
