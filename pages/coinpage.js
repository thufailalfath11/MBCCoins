import Head from "next/head";
import React from "react";
import Table from "./utils/Table";
import Layout from "@/components/common/Layout";
import Navbar from "./utils/Navbar";
const coinpage = () => {
  return ( 
        <>
          <Head>
            <title> MBCCoins</title>
          </Head>
          <Layout>
          <Navbar />
            <Table />
          </Layout>
        </>
      );
}

export default coinpage