import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '../components/layout'


export default function HomePage() {
    return(
        <>
          <Layout>
            <Head>
                <title>Home Page</title>
            </Head>
            <Script
              src=""
              strategy="lazyOnload"
              onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
              }
            />
            <div>This is homepage</div>
          </Layout>
            

        </>
    )
}