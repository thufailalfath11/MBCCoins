import Layout from "@/components/common/Layout"
import About from "@/sections/Tentang"
import Head from "next/head"

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Tentang Cryptocurrency</title>
      </Head>
      <Layout>
      <About />
      </Layout>
    </>
  )
}

export default AboutPage
