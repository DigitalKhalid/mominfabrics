import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Momin Fabrics</title>
        <meta name="description" content="A Men's Fabric Store. Buy with confidence | Wear with confidence because we always care about you and your personality." />
        <meta name="keyword" content="Men's Fabrics, Fabrics, Clothing, Cotton, Wash and Wear, Toyobo, Chambray, Terry Rayon, Men Fashion, Men Clothing, Momin Fabrics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className='object-center'>
          <Image className='text-center' src='/main.jpg' alt='Momin Fabrics' height={0} width={2000}></Image>
        </div>
      </main>
    </>
  )
}
