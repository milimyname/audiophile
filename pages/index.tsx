import Head from 'next/head'
import HeaderHome from '../components/headers/HeaderHome'
import type { NextPage } from 'next'
import MainHome from '../components/mains/MainHome'

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient();

// console.log(prisma)
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <HeaderHome />
      <MainHome/>
    </div>
  )
}

export default Home
