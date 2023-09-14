import { AuthProvider } from "@/hooks/useAuth"
import Footer from "./Footer"
import Header from "./Header"

const Layout = (props) => {
  return (
    <>
      <AuthProvider>
        <Header />
          <main>{props.children}</main>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default Layout
