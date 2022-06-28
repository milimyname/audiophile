import Head from 'next/head'
import HeaderHome from '../components/headers/HeaderHome'
import type { NextPage } from 'next'
import MainHome from '../components/mains/MainHome'

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient();

// console.log(prisma)
const Home: NextPage = () => {
  return (
    <div className="lg:bg-[url('/home/desktop/image-hero.jpg')] sm:bg-[url('/home/mobile/image-header.jpg')] md:bg-[url('/home/tablet/image-header.jpg')] bg-cover">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="max-w-screen-lg mx-auto">
        <HeaderHome />
        <MainHome/>
      </div>
    </div>
  )
}

export default Home
