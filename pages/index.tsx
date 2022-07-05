import Head from 'next/head'
import HeaderHome from '../components/headers/HeaderHome'
import type { NextPage } from 'next'
import MainHome from '../components/mains/MainHome'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <HeaderHome />
      <MainHome/>
    </>
  )
}

export default Home
