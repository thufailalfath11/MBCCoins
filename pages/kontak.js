import Layout from "@/components/common/Layout"
import { Contact } from "@/sections"
import Head from "next/head"
import React from "react"

const contact = () => {
  return (
    <>
      <Head>
        <title>Kontak - MBCCoins</title>
      </Head>
      <Layout>
      <Contact />
      </Layout>
    </>
  )
}

export default contact
