import { Hero, Team } from "@/sections";
import Head from "next/head";
import React from "react";
import Table from "./utils/Table";
import Layout from "@/components/common/Layout";

const beranda = () => {
  return (
    <>
      <Head>
        <title> MBCCoins</title>
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default beranda;
