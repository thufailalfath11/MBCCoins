import Layout from "@/components/common/Layout"
import Analysis from "@/sections/Analisis"
import Head from "next/head"

const analysis = () => {
  return (
    <>
      <Head>
        <title>Analisis</title>
      </Head>
      <Layout>
        <Analysis />
      </Layout>
    </>
  )
}

export default analysis
