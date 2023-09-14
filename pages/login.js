import LoginPage from "@/components/LoginPage"
import { Team } from "@/sections"
import Head from "next/head"
import React from "react"

const login = () => {
  return (
    <>
      <Head>
        <title> MBCCoins</title>
      </Head>
     <LoginPage/>
    </>
  )
}

export default login
