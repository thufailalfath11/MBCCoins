import Layout from "@/components/common/Layout"
import { Team } from "@/sections"
import Head from "next/head"
import React from "react"

const team = () => {
  return (
    <>
      <Head>
        <title>Tim - MBCCoins</title>
      </Head>
      <Layout>
      <Team />
      </Layout>
    </>
  )
}

export default team
