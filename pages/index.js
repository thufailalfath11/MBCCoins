
import Head from "next/head"
import { AuthProvider } from "@/hooks/useAuth"
import LoginPage from "@/components/LoginPage"
import Layout from "@/components/common/Layout"

export default function Home() {
  return (
    <>

      <Head>
        <title>MBCCoins</title>
      </Head>
      <LoginPage/>
    </>
  )
}
