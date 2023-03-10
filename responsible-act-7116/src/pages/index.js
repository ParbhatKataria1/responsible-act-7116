import LandingPage from '../components/anthropologie'
import Head from 'next/head'
import Footer from '@/components/footer'
// import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunglow - Women Clothing, Accessories & Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/S.ico" />
      </Head>
      <main>
        {/* <h1>this is me</h1> */}
        <LandingPage/>
        <Footer/>
      </main>
    </>
  )
}
