import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'


export default function HomePage() {
    return(
        <>
          <Layout>
            <Head>
                <title>Home Page</title>
            </Head>
            <h1 class="text-5xl font-bold underline">
              Hello world!
            </h1>
          </Layout>
            

        </>
    )
}